import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductList from "../components/product/ProductList";
import productService from "../services/productService";

const SearchResultsPage = () => {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get("q");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const searchResults = await productService.searchProducts(searchTerm);
        setProducts(searchResults);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [searchTerm]);

  return (
    <div>
      <h2>Search Results Page</h2>
      <ProductList products={products} />
    </div>
  );
};

export default SearchResultsPage;
