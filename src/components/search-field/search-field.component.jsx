import React from "react";

import "./search-field.styles.css";



export const SearchField = ({placeHolder, handleChange}) => (
  <input
    className='search'
    onChange={handleChange}
    type="search"
    placeHolder={placeHolder}
  />
);
