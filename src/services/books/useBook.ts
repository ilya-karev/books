import axios from 'axios';
import { useQuery } from "react-query";
import { IBook } from '../../models/books';
import { BOOK_KEY } from "../constants";
import { QueryResult } from "../types";

const getBook = async (bookID: IBook['id']): Promise<{ book: IBook }> => {
  const response = await axios.get(`/books/${bookID}`);
  return response.data;
}

const useBook = (bookID: IBook['id']): QueryResult<IBook> => {
  const { data, isLoading } = useQuery(
    [BOOK_KEY, bookID],
    () => getBook(bookID),
    { staleTime: Infinity }
  );

  return [data?.book, { isLoading }];
}

export default useBook
