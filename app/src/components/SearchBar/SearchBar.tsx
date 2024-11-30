import './SearchBar.scss';

import searchIcon from '../../assets/search.svg';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <img src={searchIcon} alt="Search" className="search-bar__icon" />
      <input type="text" placeholder="Search Quotes" className="search-bar__input" />
    </div>
  );
};

export default SearchBar;
