// header component has been used differently than mentioned in the document due to design isssues
// i tried to match the design

import profileIcon from "../assets/icons/profile-default-svgrepo-com.svg";
import addIcon from "../assets/icons/add-square-svgrepo-com.svg";
import searchIcon from "../assets/icons/search-button-svgrepo-com.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* this header is used only for mobile view  */}
      <div className="d-flex d-md-none justify-content-between align-items-center w-100 px-3 py-2 top-icons-bar my-3">
        {/* hamburger menu */}
        <button
          className="navbar-toggler btn d-md-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasSidebar"
          aria-controls="offcanvasSidebar"
          style={{ fontSize: "24px" }}>
          &#9776;
        </button>

        <div className="d-flex align-items-center gap-3">
          <img
            src={searchIcon}
            alt="searchIcon"
            className="search-mobile-only"
            style={{ width: "24px", height: "24px" }}
          />
          <img
            src={profileIcon}
            alt="User Avatar"
            className="avatar"
            style={{ width: "24px", height: "24px" }}
          />
          <img
            src={addIcon}
            alt="addIcon"
            className="add-button"
            style={{ width: "24px", height: "24px" }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
