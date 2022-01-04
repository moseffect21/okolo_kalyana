import apiClient from 'apiClient'
import { useQuery } from 'react-query'

const fetchVariants = async (bowl_id: number, tobacco_id: number) => {
  const url =
    bowl_id || tobacco_id
      ? `get_variants?${bowl_id ? `bowl_id=${bowl_id}` : `tobacco_id=${tobacco_id}`}`
      : 'all'
  const { data } = await apiClient.get(`/api/v1/mixes/${url}`)
  return data
}

export const useVariants = (bowl_id: number, tobacco_id: number) => {
  const query = useQuery(['variants', bowl_id || '', tobacco_id || ''], () =>
    fetchVariants(bowl_id, tobacco_id),
  )
  return query
}

const fetchMix = async (bowl_id: number, tobacco_id: number) => {
  const { data } = await apiClient.get(
    `/api/v1/mixes/get?${bowl_id ? `bowl_id=${bowl_id}` : ''}&${
      tobacco_id ? `tobacco_id=${tobacco_id}` : ''
    }`,
  )
  return data
}

const useMix = (bowl_id: number, tobacco_id: number) => {
  const query = useQuery(['mix', bowl_id || '', tobacco_id || ''], () =>
    fetchMix(bowl_id, tobacco_id),
  )
  return query
}

export default useMix
