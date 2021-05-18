/* eslint-disable react-hooks/rules-of-hooks */
import apiClient from 'apiClient'
import queryClient from 'apiClient/queryClient'
import { useMutation, useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { RootState } from 'ReduxStore/rootReducer'

const addCommentAction = (id: string, comment: string) => {
  const data = apiClient.post(`/api/v1/article/${id}/comment`, {
    text: comment,
    nickname: 'Аноним',
  })

  return data
}

export const addComment = (id: string) => {
  const { user } = useSelector(({ userReducer }: RootState) => ({ user: userReducer.user }))
  const mutation = useMutation(({ comment }: any) => addCommentAction(id, comment), {
    onMutate: async ({ comment }: any) => {
      await queryClient.cancelQueries('article')
      const previousData = queryClient.getQueryData<any>(['article', id.toString()])
      console.log(previousData)
      if (previousData) {
        queryClient.setQueryData(['article', id], {
          ...previousData,
          data: {
            ...previousData.data,
            comments: previousData.data.comments.push({
              id: 0,
              user_id: 0,
              nickname: user ? user.nickname : 'Аноним',
              text: comment,
              article_id: id,
            }),
          },
        })
        // if (callback) {
        //   callback()
        // }
      }
      return { previousData }
    },
    onError: (err, variables, context: any) => {
      if (context?.previousData) {
        queryClient.setQueryData(['article', id], context.previousData)
      }
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries('article')
    },
  })
  return mutation
}

const fetchArticle = (id: string) => {
  const data = apiClient.get(`/api/v1/article/${id}`)
  return data
}

const useArticle = (id: string) => {
  const query = useQuery(['article', id], () => fetchArticle(id), {
    enabled: !!id,
  })
  return {
    ...query,
  }
}

export default useArticle
