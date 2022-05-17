import React from "react";
import { Header } from "../shared/Header";
import { Card } from "./Card";

export const Shop = () => {
  return (
    <>
      <Header />
      <h1 className="offer">Unser Angebot</h1>
      <div className="cards_container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};
