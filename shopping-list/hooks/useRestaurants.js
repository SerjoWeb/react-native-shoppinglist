import { useState } from 'react';
import restaurants from '../data/restaurants';

export default () => {
  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: null
  });
  
  const searchRestaurants = (searchTerm) => {
    setResults({
      data: null,
      loading: true,
      error: null
    });

    try {
      const filtered = restaurants.restaurants.filter((restaurant) => {
        return restaurant.search_term.includes(searchTerm);
      });

      setResults({
        data: filtered,
        loading: false,
        error: null
      });
    } catch (error) {
      setResults({
        data: null,
        loading: false,
        error: error
      });
    }
  };

  return [results, searchRestaurants];
};