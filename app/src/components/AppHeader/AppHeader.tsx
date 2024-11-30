import './AppHeader.scss';

import quotableLogo from '/quotable.svg';

import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';

const AppHeader = () => {
  return (
    <header className="app-header">
      <img src={quotableLogo} alt="Quotable" className="app-header__logo" />
      <SearchBar />
      <Button label="New Quote" />
    </header>
  );
};

export default AppHeader;
