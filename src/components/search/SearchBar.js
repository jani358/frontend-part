import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate instead of useHistory
import productService from "../../services/productService";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // useNavigate instead of useHistory

  const handleSearch = async () => {
    try {
      const searchResults = await productService.searchProducts(searchTerm);

      // Redirect to the search results page
      navigate("/search-results"); // use navigate
    } catch (error) {
      console.error("Error searching products:", error);
      alert("Error searching products. Please try again.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
