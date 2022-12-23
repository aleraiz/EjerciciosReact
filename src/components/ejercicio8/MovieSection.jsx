import React from "react";
import Card from "./Card";

const MovieSection = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <Card movie={103} />
      <Card movie={104} />
      <Card movie={101} />
      {/* <Card
        nombre="Spider-man"
        año={2019}
        imagen={srcImgSpiderman}
        puntaje="No la vi aún"
      />
      <Card
        nombre="Batman"
        año={1989}
        imagen={srcImgBatman}
        puntaje="Excelente"
      />
      <Card
        nombre="Batman & Robin"
        año={1997}
        imagen={srcImgBatmanRobin}
        puntaje="Regular"
      /> */}
    </div>
  );
};

export default MovieSection;
