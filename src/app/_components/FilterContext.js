import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const useFilter = () => {
  return useContext(FilterContext);
};

export const FilterProvider = ({ children }) => {
  const [tag, setTag] = useState('Home');

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <FilterContext.Provider value={{ tag, handleTagChange }}>
      {children}
    </FilterContext.Provider>
  );
};