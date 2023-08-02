import React from 'react'

const Filter = ({ handleFilter }) => {
    const handleTitleChange = (event) => {
        handleFilter("title", event.target.value);
      };
    
      const handleRatingChange = (event) => {
        handleFilter("rating", event.target.value);
      };
    
      return (
        <div className="filter">
          <input
            type="text"
            placeholder="Filter by Title"
            onChange={handleTitleChange}
          />
          <input
            type="number"
            min="0"
            max="10"
            step="0.1"
            placeholder="Filter by rating"
            onChange={handleRatingChange}
          />
        </div>
      );
}

export default Filter
