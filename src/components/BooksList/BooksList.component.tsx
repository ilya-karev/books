import React, { useState, useEffect } from 'react';
import { map } from 'lodash';
import { Paper, IconButton, InputBase, Grid, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FixedSizeList } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";

import useBooksList from "../../services/books/useBooksList";
import useDebounce from '../../hooks/useDebounce';
import { IBook } from '../../models/books';
import CommonBackdrop from '../common/Backdrop/Backdrop.component';

import BooksListItem from './components/BookListItem/BooksListItem.component';
import { getSearch, saveSearch } from './helpers';

const BooksList = () => {
  const [booksSets, setBooksSets] = useState<IBook[][]>([]);
  const [title, setTitle] = useState<string>(getSearch());
  const searchTitle = useDebounce(title);

  const [books, { isLoading, refetch }] = useBooksList(searchTitle);

  useEffect(() => {
    refetch?.();
    saveSearch(searchTitle);
  }, [searchTitle])

  const setNewValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  useEffect(() => {
    if (books) {
      const sets = [];
      for (let i = 0; i < books.length; i += 3)
        sets.push(books.slice(i, i + 3));
      setBooksSets(sets);
    }
  }, [books])

  return  (
    <Grid container direction="column" item sx={{ height: '100%', overflow: 'hidden', width: '1000px' }}>
      <Grid item container direction="row-reverse" sx={{ m: 5 }}>
        <Grid item container justifyContent="center">
          <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ 'aria-label': 'search books' }}
              onChange={setNewValue}
              value={title}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
      {!!books?.length ? (
        <Grid item xs container spacing={2}>
          <AutoSizer>
            {({ height, width }) => (
              <FixedSizeList
                width={width}
                height={height}
                itemSize={460}
                itemCount={booksSets.length}
              >
                {({ index, style }) => {
                  const setBooks = booksSets[index]
                  return (
                    <Grid spacing={2} container style={style}>
                      {map(setBooks, (book) => (
                        <Grid item xs={4} key={book.id}>
                          <BooksListItem book={book} />
                        </Grid>
                      ))}
                    </Grid>
                  )
              }}
              </FixedSizeList>
            )}
          </AutoSizer>
        </Grid>
      ) : (
        <Grid container>
          <Typography variant="h4">
            Unfortunately, no result was found
          </Typography>
        </Grid>
      )}
      <CommonBackdrop isLoading={isLoading} />
    </Grid>
  )
}

export default BooksList
