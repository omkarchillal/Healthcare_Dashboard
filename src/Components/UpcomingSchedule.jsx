import { upcomingSchedule } from "../data/appointmentData";
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import "./UpcomingSchedule.css";

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-container container">
      <h2 className="upcoming-title mb-4">The Upcoming Schedule</h2>

      {upcomingSchedule.map((schedule, index) => (
        <div key={index} className="mb-4">
          <h3 className="schedule-day">{schedule.day}</h3>
          <div className="row g-3">
            {schedule.appointments.map((appointment) => (
              <SimpleAppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
