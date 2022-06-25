import React from 'react';
import "./filter.scss";

const FILTER = {
  All: () => true,
  Pending: todo => !todo.done,
  Complete: todo => todo.done
}

const FILTERNAME = Object.keys(FILTER);

const FilterComponent = () => {

  const filters = FILTERNAME.map(ft => <div role="button" tabIndex="0" key={ft} className="filter__items">{ft}</div>)
  
  return (
    <div className='filter__container'>
      {filters}
    </div>
  )
}

export default FilterComponent;