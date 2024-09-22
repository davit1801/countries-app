import Button from './Button';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <span className="app_name">Travel Your Way</span>
          <nav className="header_nav">
            <ul className="nav_list">
              <li>
                <a href="#" className="nav_item">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav_item">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="nav_item">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="nav_item">
                  Services
                </a>
              </li>
            </ul>
          </nav>
          <Button />
        </div>
      </div>
    </header>
  );
};

export default Header;
