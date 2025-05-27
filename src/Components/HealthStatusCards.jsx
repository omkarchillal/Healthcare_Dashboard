import { healthStatusData } from "../data/healthData";
import humanLungs from "../assets/images/human-lungs.svg";
import teeth from "../assets/images/teeth.svg";
import bone from "../assets/images/bone.svg";

const getIconImage = (id) => {
  switch (id) {
    case "lungs":
      return humanLungs;
    case "teeth":
      return teeth;
    case "bone":
      return bone;
    default:
      return null;
  }
};

const HealthStatusCards = () => {
  return (
    <div className="d-flex flex-column gap-3">
      {healthStatusData.map((item) => (
        <div key={item.id} className="p-3 rounded-5 " style={{ backgroundColor: "#F3F3FF" }}>
          <div className="d-flex align-items-center gap-3 mb-2">
            <img
              src={getIconImage(item.id)}
              alt={item.title}
              className="rounded"
              style={{ width: "3rem", height: "3rem", objectFit: "contain" }}
            />
            <h6 className="mb-0 fw-semibold text-dark">{item.title}</h6>
          </div>
          <p className="text-muted small mb-2">{item.date}</p>
          <div className="progress rounded-pill" style={{ height: "0.5rem" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${item.progress}%`,
                backgroundColor: item.color,
              }}
              aria-valuenow={item.progress}
              aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
