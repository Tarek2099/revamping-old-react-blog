import React, { useState } from "react";
import { UseContext } from "../../Context/MyContext";

const Categorized = () => {
  const [category, setCategory] = useState();
  // Get data from state
  const blogs = UseContext();

  return (
    <>
      <div className="categorized-container">
        <div className="categorized">
          <button className="latest">Travel</button>
          <button className="tech">Tech</button>
          <button className="lifestyle">Lifestyle</button>
          <button className="career">Career</button>
        </div>
      </div>
    </>
  );
};

export default Categorized;
