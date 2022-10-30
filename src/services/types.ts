export type QueryResult<TData> = [
  TData | undefined,
  { 
    isLoading: boolean,
    refetch?: () => void
  }
]
