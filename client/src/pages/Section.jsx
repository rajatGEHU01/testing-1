import { useParams, useNavigate } from "react-router-dom";

// Import images
import amazon from "../assets/amazon.png";
import tcs from "../assets/tcs.png";
import infosys from "../assets/infosys.png";
import google from "../assets/google.png";
import microsoft from "../assets/microsoft.png";
import wipro from "../assets/wipro.png";

const companies = [
  { name: "Amazon", logo: amazon },
  { name: "TCS", logo: tcs },
  { name: "Infosys", logo: infosys },
  { name: "Google", logo: google },
  { name: "Microsoft", logo: microsoft },
  { name: "Wipro", logo: wipro }
];

export default function Section() {
  const { category } = useParams();
  const navigate = useNavigate();

  return (
    <div className="section">
      <h2 className="title">{category.toUpperCase()} Companies</h2>

      <div className="grid">
        {companies.map((company) => (
          <div
            key={company.name}
            className="card"
            onClick={() =>
              navigate(`/questions/${category}/${company.name}`)
            }
          >
            <img src={company.logo} alt={company.name} />
            <p>{company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}