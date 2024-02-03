import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import FavoritesPage from './pages/FavoritesPage';
import SearchResultsPage from './pages/SearchResultsPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/product/:id" component={ProductDetailPage} />
        <Route path="/add-product" component={AddProductPage} />
        <Route path="/edit-product/:id" component={EditProductPage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/search-results" component={SearchResultsPage} />
      </Switch>
    </Router>
  );
};

export default App;
