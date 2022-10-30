import { useParams, useNavigate } from 'react-router-dom';
import Book from '../../components/Book/Book.components';
import { AppRoutes } from '../../router/constants';

const BookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id)
    navigate(AppRoutes.discover);

  return !!id ? <Book id={id} /> : null;
}

export default BookPage
