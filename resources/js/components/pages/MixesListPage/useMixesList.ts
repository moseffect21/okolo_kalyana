import apiClient from 'apiClient'
import { useQuery } from 'react-query'

const fetchMixes = async (id: number, type: string) => {
  const { data } = await apiClient.get(
    `/api/v1/mixes/get_mixes?${type === 'tobacco' ? `tobacco_id=${id}` : `bowl_id=${id}`}`,
  )
  return data
}

const useMixes = (id: number, type: string) => {
  const query = useQuery(['mixes', type, id], () => fetchMixes(id, type))
  return query
}

export default useMixes
