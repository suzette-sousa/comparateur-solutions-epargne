const FilterSelector = (props) => {
  const { filter, onFilterChange } = props;

  return (
    <div>
      <label htmlFor="filter">Filtrer par : </label>
      <select id="filter" value={filter} onChange={onFilterChange}>
        <option value="">Tous</option>
        <option value="épargne">Épargne</option>
        <option value="assurance">Assurance</option>
      </select>
    </div>
  );
};

export default FilterSelector;
