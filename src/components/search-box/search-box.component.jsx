import React from 'react';
import "./search-box.styles.css";

// destructuring props in props={ placeholder, handleChange }()
// functional component
// export const SearchBox = ({ placeholder, handleChange }) => (
// <input className="search" type="search" placeholder={placeholder} onChange={handleChange} />
// to create following reusable component <SearchBox placeholder=... handleChange=... />
export const SearchBox = (props) => (
<input className="search" type="search" placeholder={props.placeholder} onChange={props.handleChange} />

);
