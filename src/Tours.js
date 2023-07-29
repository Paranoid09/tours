import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, deleteTour }) => {
  return (
    <div className="title">
      <h2>our tours</h2>
      <div className="underline"></div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} deleteTour={deleteTour}></Tour>;
        })}
      </div>
    </div>
  );
};

export default Tours;
