const SortBySelector = (props) => {
  const { sortBy, onSortByChange } = props;

  return (
    <div>
      <label htmlFor="sortBy">Trier par : </label>
      <select id="sortBy" value={sortBy} onChange={onSortByChange}>
        <option value="">Aucun</option>
        <option value="interestRate">Taux d’intérêt</option>
        <option value="name">Nom</option>
      </select>
    </div>
  );
};

export default SortBySelector;
