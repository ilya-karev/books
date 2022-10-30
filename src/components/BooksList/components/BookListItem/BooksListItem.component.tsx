import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

import { IBook } from '../../../../models/books';

import { getPublisherInitials } from './helpers';
import './BooksListItem.styles.css';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../router/constants';


type BooksListItemProps = {
  book: IBook
}
const BooksListItem = ({ book }: BooksListItemProps) => {
  const navigate = useNavigate();
  const publisherInitials = getPublisherInitials(book.publisher);

  const navigateToBook = () => {
    navigate(`${AppRoutes.book}/${book.id}`);
  }
  
  return (
    <Card onClick={navigateToBook} className="BooksListItem">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {publisherInitials}
          </Avatar>
        }
        title={book.title}
        subheader={book.author}
        className="text-overflow"
      />
      <CardMedia
        component="img"
        height="194"
        image={book.coverImageUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography paragraph className="max-height-overflow">
          {book.synopsis}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" color="text.secondary" className="max-height-overflow">
          {book.pageCount} pages
        </Typography>
      </CardActions>
    </Card>
  );
}

export default BooksListItem
