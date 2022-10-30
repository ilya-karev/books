import axios from 'axios';
import { useQuery } from "react-query";
import { IBook } from '../../models/books';
import { BOOKS_KEY } from '../constants';
import { QueryResult } from '../types';

const getBooksList = async (title: string): Promise<{ books: IBook[] }> => {
  const response = await axios.get(`/books?q=${title}`);
  return response.data;
}

const useBooksList = (title: string): QueryResult<IBook[]> => {
  const { data, isLoading, refetch } = useQuery([BOOKS_KEY, title], () => getBooksList(title), { enabled: false, staleTime: Infinity });
  return [data?.books || [], { isLoading, refetch }];
}

export default useBooksList
