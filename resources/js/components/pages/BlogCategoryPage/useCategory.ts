import apiClient from 'apiClient'
import { useQuery } from 'react-query'

const fetchCategory = (slug: string) => {
  const data = apiClient.get(`/api/v1/category/${slug}`)
  return data
}

const useCategory = (slug: string) => {
  const query = useQuery(['category', slug], () => fetchCategory(slug), {
    enabled: !!slug,
  })
  return {
    ...query,
  }
}

export default useCategory
