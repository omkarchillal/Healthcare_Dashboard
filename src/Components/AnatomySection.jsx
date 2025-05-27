import { anatomyIndicators } from "../data/healthData";
import "./AnatomySection.css";
import humanAnatomy from "../assets/images/human-body-anatomy.png";

const AnatomySection = () => {
  return (
    <div style={{ backgroundColor: "#F3F3FF" }} className=" p-3 rounded-5 h-100">
      <div
        className="position-relative d-flex justify-content-center align-items-center"
        style={{ height: "24rem" }}>
        <img
          src={humanAnatomy}
          alt="Human Anatomy"
          className="img-fluid"
          style={{ height: "25rem", objectFit: "contain" }}
        />

        {anatomyIndicators.map((indicator) => (
          <div
            key={indicator.id}
            className="anatomy-indicator"
            style={{
              top: indicator.position.top,
              left: indicator.position.left,
            }}>
            <div className="d-flex align-items-center gap-2 px-3 py-1 rounded-pill border shadow-sm bg-white">
              <div
                className="rounded-circle"
                style={{
                  backgroundColor: indicator.color,
                  width: "0.5rem",
                  height: "0.5rem",
                }}
              />
              <span className="small fw-medium text-secondary">{indicator.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
