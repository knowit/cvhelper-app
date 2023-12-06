import axios, { AxiosError, AxiosResponse } from "axios"

axios.interceptors.response.use(
    null,
    (error: AxiosError<{ message: string }>) => {
      let err: QueryError
  
      if (error.response) {
        // Normal error response from server
  
        console.log({ headers: error.response.headers })
  
        const { data, headers, status, statusText } = error.response
        err = { ...data, headers, status, statusText }
      } else if (error.request) {
        // No response
  
        const { message } = error
        err = { message }
      } else {
        //Unknown error
  
        const { message } = error
        err = { message }
      }
  
      return Promise.reject(err)
    }
  )
  
  export type QueryAxiosError = Partial<Pick<AxiosResponse, "headers" | "status" | "statusText">>
  export type QueryError<T extends Record<string, unknown> = { message: string }> = T & QueryAxiosError