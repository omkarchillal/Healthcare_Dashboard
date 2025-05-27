import Sidebar from "./Components/Sidebar";
import DashboardMainContent from "./Components/DashboardMainContent";
import Header from "./Components/Header";

function App() {
  return (
    <div className="d-flex flex-row vh-100 overflow-hidden">
      <Sidebar />
      <div className="d-flex flex-column flex-grow-1 vh-100">
        <div className="d-block d-md-none">
          <Header />
        </div>
        <div className="flex-grow-1 overflow-auto">
          <DashboardMainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
