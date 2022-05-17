import React from "react";
import { Header } from "../shared/Header";

export const Homepage = () => {
  return (
    <>
      <Header />
      <main className="videoAndHeading">
        <video autoPlay loop muted>
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="heading">
          <div className="div">Kauf bidde Blumen. Jetzt!</div>
        </div>
      </main>
    </>
  );
};
