import { Grid, Paper, Button, Typography } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useNavigate } from 'react-router-dom';

import { IBook } from "../../models/books";
import useBook from "../../services/books/useBook";
import CommonBackdrop from '../common/Backdrop/Backdrop.component';
import { AppRoutes } from '../../router/constants';

type BookProps = {
  id: IBook['id']
}
const Book = ({ id }: BookProps) => {
  const [book] = useBook(id)
  const navigate = useNavigate();

  const returnToList = () => {
    navigate(AppRoutes.discover)
  }

  return book ? (
    <Grid container direction="column" wrap="nowrap">
      <Grid item container justifyContent="flex-end" sx={{ my: 5 }}>
        <Button variant="outlined" onClick={returnToList}>
          <span>Back</span>
          <KeyboardReturnIcon />
        </Button>
      </Grid>
      <Paper sx={{ p: '20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img
              width="100%"
              src={book?.coverImageUrl}
              alt={book?.title}
            />
          </Grid>
          <Grid xs item container spacing={4} direction="column">
            <Grid item>
              <Typography variant="h3">
                {book.title}
              </Typography>
              <Typography variant="h5">
                By {book.author}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body1" >
                {book.synopsis}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                Published by {book.publisher}, {book.pageCount} pages
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  ) : <CommonBackdrop isLoading={true} />
}

export default Book
