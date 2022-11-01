import React from "react";
import propTypes from 'prop-types';

const Filter = ({filter, onChange}) => {
    return (
    <input 
    type="text" 
    name="filter" 
    value = {filter} 
    onChange={({target}) => onChange(target.value)} 
    placeholder="Enter info for seach"/>
    )
}

export default Filter

Filter.propTypes = {
    filter: propTypes.string,
    onChange: propTypes.func
}