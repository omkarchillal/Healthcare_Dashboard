import "./SimpleAppointmentCard.css";

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className="col-12 col-sm-6 col-md-auto">
      <div className="d-flex align-items-start gap-3 p-4 simple-card rounded-5 ">
        <div className="flex-grow-1">
          <h4 className="simple-card-title text-truncate mb-1">{appointment.title}</h4>
          <p className="simple-card-time mb-0">{appointment.time}</p>
        </div>
        <div
          className="simple-card-icon d-flex align-items-center justify-content-center"
          style={{ backgroundColor: appointment.color }}>
          {appointment.icon}
        </div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
