import Vertex from "./Vertex.js";

const Path = ({ path }) => {
  return (
    <div className="flex gap-2">
      {path.map((person, ind) => (
        <div key={person} className="flex items-center">
          <Vertex name={person} />
          {ind !== path.length - 1 && <span className="mx-1">âŸ¶</span>}
        </div>
      ))}
    </div>
  );
};

export default Path;