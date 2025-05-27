import layoutDashboardIcon from "../assets/icons/dashboard-svgrepo-com.svg";
import historyIcon from "../assets/icons/history-ui-web-svgrepo-com.svg";
import calendarIcon from "../assets/icons/calender-svgrepo-com.svg";
import clockIcon from "../assets/icons/appointment-svgrepo-com.svg";
import barChartIcon from "../assets/icons/stats-svgrepo-com.svg";
import messageIcon from "../assets/icons/chat-dots-svgrepo-com.svg";
import phoneIcon from "../assets/icons/support-svgrepo-com.svg";
import settingsIcon from "../assets/icons/settings-svgrepo-com.svg";
import { navigationItems } from "../data/navigationData";
import "./Sidebar.css";

const iconMap = {
  LayoutDashboard: layoutDashboardIcon,
  History: historyIcon,
  Calendar: calendarIcon,
  Clock: clockIcon,
  BarChart3: barChartIcon,
  MessageCircle: messageIcon,
  Phone: phoneIcon,
  Settings: settingsIcon,
};

const Sidebar = () => {
  const generalItems = navigationItems.slice(0, 5);
  const toolItems = navigationItems.filter((item) => item.category === "Tools");
  const settingsItem = navigationItems.find((item) => item.category === "Bottom");

  const renderButton = (item) => {
    const iconSrc = iconMap[item.icon];
    return (
      <button key={item.id} className={`sidebar-button ${item.active ? "active" : ""}`}>
        <img src={iconSrc} alt={`${item.label} icon`} className="sidebar-icon" />
        <span className="sidebar-label">{item.label}</span>
      </button>
    );
  };

  return (
    <div style={{ backgroundColor: "#f4f8fe" }}>
      {/* mobile view offcanvas sidebar */}
      <div
        className="offcanvas offcanvas-start rounded-3 m-2 d-md-none"
        tabIndex="-1"
        id="offcanvasSidebar"
        aria-labelledby="offcanvasSidebarLabel"
        style={{ width: "55vw", maxWidth: "300px" }}>
        <div className="offcanvas-header">
          <h1 className="offcanvas-title" id="offcanvasSidebarLabel">
            <span style={{ color: "#20dcee" }}>Health</span>
            <span style={{ color: "#20276a" }}>care</span>
          </h1>
          {/* close button */}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>

        <div className="offcanvas-body d-flex flex-column justify-content-between">
          <div>
            <h2 className="sidebar-heading">General</h2>
            <nav className="sidebar-nav">{generalItems.map(renderButton)}</nav>

            <h2 className="sidebar-heading mt-4">Tools</h2>
            <nav className="sidebar-nav">{toolItems.map(renderButton)}</nav>
          </div>

          {settingsItem && <div className="px-2 pt-3 pb-2">{renderButton(settingsItem)}</div>}
        </div>
      </div>

      {/* static desktop sidebar */}
      <aside
        className="sidebar d-none d-md-flex flex-column justify-content-between"
        style={{ height: "100vh" }}>
        <div>
          <h3 className="header-title mb-4 mt-2 px-3">
            <span style={{ color: "#20dcee" }}>Health</span>
            <span style={{ color: "#20276a" }}>care</span>
          </h3>

          <h2 className="sidebar-heading px-3">General</h2>
          <nav className="sidebar-nav">{generalItems.map(renderButton)}</nav>

          <h2 className="sidebar-heading mt-4 px-3">Tools</h2>
          <nav className="sidebar-nav">{toolItems.map(renderButton)}</nav>
        </div>

        {settingsItem && <div className="px-3 pb-3">{renderButton(settingsItem)}</div>}
      </aside>
    </div>
  );
};

export default Sidebar;
