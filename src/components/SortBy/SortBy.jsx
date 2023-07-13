import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './SortBy.scss';

const SortBy = (props) => {
  const { sortBy, onSortByChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const handleSortByChange = (value) => {
    onSortByChange(value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`sort-by-selector ${isOpen ? 'open' : ''}`}
      ref={containerRef}
    >
      <div className="sortby-header" onClick={toggleDropdown}>
        <span>Trier par</span>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="sortby-toggle-icon"
        />
      </div>
      {isOpen && (
        <div className="sortby-options">
          <label className={sortBy === 'interestRateAsc' ? 'selected' : ''}>
            <input
              type="radio"
              value="interestRate"
              checked={sortBy === 'interestRateAsc'}
              onChange={() => handleSortByChange('interestRateAsc')}
            />
            Taux d'intérêt - Croissant
          </label>
          <label className={sortBy === 'interestRateDesc' ? 'selected' : ''}>
            <input
              type="radio"
              value="interestRate"
              checked={sortBy === 'interestRateDesc'}
              onChange={() => handleSortByChange('interestRateDesc')}
            />
            Taux d'intérêt - Décroissant
          </label>
          <label className={sortBy === 'nameAsc' ? 'selected' : ''}>
            <input
              type="radio"
              value="nameAsc"
              checked={sortBy === 'nameAsc'}
              onChange={() => handleSortByChange('nameAsc')}
            />
            Nom - A -{'>'} Z
          </label>
          <label className={sortBy === 'nameDesc' ? 'selected' : ''}>
            <input
              type="radio"
              value="nameDesc"
              checked={sortBy === 'nameDesc'}
              onChange={() => handleSortByChange('nameDesc')}
            />
            Nom - Z -{'>'} A
          </label>
        </div>
      )}
    </div>
  );
};

export default SortBy;
