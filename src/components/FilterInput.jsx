const FilterINput = ({ filter, onFilterChange }) => {
  return (
    <div className='filter'>
      <input
        type='text'
        value={filter}
        placeholder='Filter Coins by name or symbol'
        onChange={(e) => {
          onFilterChange(e.target.value);
        }}
      />
    </div>
  );
};

export default FilterINput;
