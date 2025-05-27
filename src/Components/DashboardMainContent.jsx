import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import notificationIcon from "../assets/icons/notification-svgrepo-com.svg";
import searchIcon from "../assets/icons/search-button-svgrepo-com.svg";
import profileIcon from "../assets/icons/profile-default-svgrepo-com.svg";
import addIcon from "../assets/icons/add-square-svgrepo-com.svg";
import "./DashboardMainContent.css";

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main container-wrap">
      <div className="container-fluid mt-3 px-3">
        <div className="row flex-column flex-lg-row gx-4">
          {/* left column */}
          <div className="col-12 col-lg-6 d-flex flex-column leftcolumn">
            <div
              className="d-none d-md-flex align-items-center position-relative w-100 mt-3"
              style={{ maxWidth: "600px" }}>
              <img
                src={searchIcon}
                alt="searchIcon"
                className="position-absolute"
                style={{
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "20px",
                }}
              />
              <input type="text" placeholder="Search" className="form-control ps-5 pe-5" readOnly />
              <img
                src={notificationIcon}
                alt="notificationIcon"
                className="position-absolute"
                style={{
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "22px",
                  height: "22px",
                }}
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3 mt-md-2">
              <h1 className="h3 ms-2 mb-0">Dashboard</h1>
              <small className="me-2 text-muted">This Week</small>
            </div>

            <div className="d-flex flex-column flex-md-row gap-3 mb-4">
              {/* Dashboard overview */}
              <div className="flex-fill">
                <AnatomySection />
              </div>
              <div className="flex-fill">
                <HealthStatusCards />
              </div>
            </div>

            <ActivityFeed />
          </div>

          {/* right column */}
          <div
            className="col-12 col-lg-6 d-flex flex-column"
            style={{ backgroundColor: "#F3F3FF" }}>
            <div className="d-none d-md-flex justify-content-end align-items-center gap-3 mb-2 mt-3">
              <img
                src={profileIcon}
                alt="Profile"
                style={{ width: "24px", height: "24px", cursor: "pointer" }}
              />
              <img
                src={addIcon}
                alt="Add"
                style={{ width: "24px", height: "24px", cursor: "pointer" }}
              />
            </div>
            <CalendarView />
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;
