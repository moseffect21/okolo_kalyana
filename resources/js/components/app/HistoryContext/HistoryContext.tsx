/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import React, { useEffect, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { Location, Action } from 'history'

export type HistoryContextValue = {
  isPreviousLocationWithinApp: () => boolean
}
export const HistoryContext = React.createContext<HistoryContextValue>({
  isPreviousLocationWithinApp: () => false,
})

type Props = {
  children: React.ReactNode
}

class PathLocationManager {
  private pastLocations: Location[] = []

  private readonly key = 'appLocationHistory'

  constructor() {
    const jsonFromSessionStorage = sessionStorage.getItem(this.key)
    this.pastLocations = jsonFromSessionStorage
      ? (JSON.parse(jsonFromSessionStorage) as Location[])
      : []
  }

  public push(location: Location) {
    this.pastLocations.push(location)
    this.dumpToSessionStorage()
  }

  public pop() {
    this.pastLocations.pop()
    this.dumpToSessionStorage()
  }

  public length() {
    return this.pastLocations.length
  }

  public setLocation(index: number, location: Location) {
    this.pastLocations[index] = location
    this.dumpToSessionStorage()
  }

  public getLocation(index: number) {
    return this.pastLocations[index]
  }

  public setLocations(locations: Location[]) {
    this.pastLocations = locations
    this.dumpToSessionStorage()
  }

  private dumpToSessionStorage() {
    sessionStorage.setItem(this.key, JSON.stringify(this.pastLocations))
  }
}

const updatePastLocations: any = (pastLocations: PathLocationManager) => (
  location: Location,
  action: Action,
) => {
  switch (action) {
    case 'PUSH':
      // first location when app loads and when pushing onto history
      pastLocations.push(location)
      break
    case 'REPLACE':
      // only when using history.replace
      pastLocations.setLocation(pastLocations.length() - 1, location)
      break
    case 'POP': {
      // happens when using the back button, or forward button
      pastLocations.pop()
      // location according to pastLocations
      const appLocation = pastLocations.getLocation(pastLocations.length() - 1)
      if (!(appLocation && appLocation.key === location.key)) {
        // If the current location doesn't match what the app thinks is the current location,
        // blow up the app history.
        pastLocations.setLocations([location])
      }
      break
    }
    default:
  }
}

export const Provider = ({ children }: Props): React.ReactElement => {
  const history = useHistory()
  const pastLocations = useMemo(() => new PathLocationManager(), [])
  const value = useMemo(
    () => ({
      isPreviousLocationWithinApp: () => pastLocations.length() > 1,
    }),
    [pastLocations],
  )

  useEffect(() => {
    const unsubscribe = history.listen(updatePastLocations(pastLocations))

    return () => {
      unsubscribe()
    }
  }, [history, pastLocations])

  return <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
}

export const { Consumer } = HistoryContext
