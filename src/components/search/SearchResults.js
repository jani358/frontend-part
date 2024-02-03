// /client/src/components/search/SearchResults.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Typography, Paper } from '@mui/material';

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');
  const searchResults = useSelector(state =>
    state.products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4">Search Results for "{searchQuery}"</Typography>
        {searchResults.map(product => (
          <div key={product._id}>
            <Typography variant="h6">{product.name}</Typography>
            <Typography variant="body1">{product.description}</Typography>
          </div>
        ))}
      </Paper>
    </Container>
  );
};

export default SearchResults;
