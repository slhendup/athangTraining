import { Link } from "react-router-dom";
import Nav from "../../components/Nav";

const contries = () => {
  return (
    <div>
      <Nav />
      <h2>contries Page</h2>
   {[
        { name: "Bhutan", path: "bhutan" },
        { name: "Nepal", path: "nepal" },
        { name: "USA", path: "usa" },
      ].map((place) => (
        <div key={place.path}>
          <Link to={`/blog/${place.path}`}>{place.name}</Link>
        </div>
      ))}

      
    </div>
  );
};

export default contries;
