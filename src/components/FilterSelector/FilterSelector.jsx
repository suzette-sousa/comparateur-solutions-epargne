import './FilterSelector.scss';

const FilterSelector = (props) => {
  const { filter, onFilterChange } = props;

  const handleFilterChange = (value) => {
    onFilterChange(value);
  };

  return (
    <div className="filter-selector">
      <label>Filtrer par :</label>
      <div className="filter-buttons">
        <button
          className={filter === '' ? 'active' : ''}
          onClick={() => handleFilterChange('')}
        >
          Tous
        </button>
        <button
          className={filter === 'épargne' ? 'active' : ''}
          onClick={() => handleFilterChange('épargne')}
        >
          Épargne
        </button>
        <button
          className={filter === 'assurance' ? 'active' : ''}
          onClick={() => handleFilterChange('assurance')}
        >
          Assurance
        </button>
      </div>
    </div>
  );
};

export default FilterSelector;
