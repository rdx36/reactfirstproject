import React from "react";

const Vertex = ({ name } ) => {
  return (
    <div className="p-2 px-4 border-2 border-gray-600 rounded-full w-fit">
      {name}
    </div>
  );
};

export default Vertex;