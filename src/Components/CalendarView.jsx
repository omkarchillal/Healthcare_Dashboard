import { ChevronLeft, ChevronRight } from "lucide-react";
import { calendarData, featuredAppointments } from "../data/appointmentData";
import "./CalendarView.css";

const CalendarView = () => {
  return (
    <div
      style={{ backgroundColor: "#F3F3FF" }}
      className="container rounded-3 p-2 mb-2 caledndarcontainer">
      {/* Calendar View */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h2 className="h5 fw-semibold text-dark mb-0">{calendarData.month}</h2>
        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-light p-1" disabled>
            <ChevronLeft size={16} className="text-secondary" />
          </button>
          <button className="btn btn-light p-1" disabled>
            <ChevronRight size={16} className="text-secondary" />
          </button>
        </div>
      </div>

      {/* calender grid */}
      <div className="calendar-grid-responsive mb-4">
        {calendarData.days.map((day) => (
          <div key={day.date} className=" me-2 calendar-day-box text-center">
            <div className="text-muted small mb-1">{day.day}</div>
            <div className="fw-semibold mb-2">{day.date}</div>
            <div>
              {day.appointments.map((time, index) => {
                const badgeClass =
                  day.date === 30
                    ? "bg-indigo-highlight"
                    : day.date === 26
                    ? "bg-indigo-primary"
                    : "bg-default";
                return (
                  <span key={index} className={`appointment-badge ${badgeClass} d-inline-block`}>
                    {time}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* appointments pill */}
      <div className="row g-3 featured-appointments">
        {featuredAppointments.map((appointment) => (
          <div key={appointment.id} className="col-12 col-sm-6 col-md-auto">
            <div
              className="featured-card rounded-5 h-100 d-flex flex-column justify-content-between"
              style={{
                backgroundColor: appointment.color,
                color: appointment.textColor,
                minWidth: "180px",
                whiteSpace: "nowrap",
              }}>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h3 className="fw-medium small mb-0 text-truncate">{appointment.title}</h3>
                <div
                  className="simple-card-icon d-flex align-items-center justify-content-center ms-2"
                  style={{
                    color: appointment.color,
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    fontSize: "14px",
                  }}>
                  {appointment.icon}
                </div>
              </div>
              <p className="time small mb-2">{appointment.time}</p>
              <p className="doctor small mb-0 text-truncate">{appointment.doctor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
