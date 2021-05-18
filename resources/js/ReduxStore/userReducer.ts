const SET_USER = 'SET_USER'
const SET_USER_TOKEN = 'SET_USER_TOKEN'
const SET_PAGE_USER = 'SET_PAGE_USER'
const SET_USER_REF_LINK = 'SET_USER_REF_LINK'

type UserState = {
  user: any
  token: any
  page_user: any
  isLoading: boolean
  refLink: string
}

type SetUserAction = {
  type: typeof SET_USER
  user: any
}
type SetPageUserAction = {
  type: typeof SET_PAGE_USER
  page_user: any
}
type SetUserTokenAction = {
  type: typeof SET_USER_TOKEN
  token: any
}
type SetUserRefLinkAction = {
  type: typeof SET_USER_REF_LINK
  refLink: string
}

type Actions = SetUserAction | SetUserTokenAction | SetPageUserAction | SetUserRefLinkAction

export const setUser = (user: any): SetUserAction => ({
  type: SET_USER,
  user,
})

export const setUserToken = (token: any): SetUserTokenAction => ({
  type: SET_USER_TOKEN,
  token,
})

export const setPageUser = (page_user: any): SetPageUserAction => ({
  type: SET_PAGE_USER,
  page_user,
})
export const setUserRefLink = (refLink: string): SetUserRefLinkAction => ({
  type: SET_USER_REF_LINK,
  refLink,
})
const initialState: UserState = {
  user: null,
  token: null,
  page_user: null,
  isLoading: true,
  refLink: '',
}

const userReducer = (state = initialState, action: Actions): UserState => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user, isLoading: false }

    case SET_PAGE_USER:
      return { ...state, page_user: action.page_user }

    case SET_USER_TOKEN: {
      return {
        ...state,
        token: action.token,
      }
    }
    case SET_USER_REF_LINK: {
      return {
        ...state,
        refLink: action.refLink,
      }
    }

    default:
      return state
  }
}

export default userReducer
