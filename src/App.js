import "./App.css";
import { Homepage } from "./Pages/HomePage/HomePage";
import { Shop } from "./Pages/Shop/Shop.js";
import { Details } from "./Pages/Details/Details.js";
import { Checkout } from "./Pages/Checkout/Checkout";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import { Header } from "./Pages/shared/Header";
import React, { useState, useEffect } from "react";

import { useIncDec } from "./Hooks/useIncDec";
import { useImages } from "./Hooks/useImages";
import { useDetails } from "./Hooks/useDetail";

import { getProducts, getTotal } from "./Util/ProductsSummary";
import { getTotalNumProducts } from "./Util/Cart";

function App() {
  const [allImagesInfo, incrementInStore, decrementInStore] = useImages();
  const [increment, arrIncDecInfo, decrement] = useIncDec(allImagesInfo.length);
  const [currentSelectedPlant, flowerSelectedByUser] = useDetails();

  return (
    <>
      <Header getTotalNumProducts={() => getTotalNumProducts(allImagesInfo)} />

      <Routes>
        <Route index element={<Homepage />} />
        <Route path="home" element={<Homepage />}></Route>
        <Route
          path="shop"
          element={
            <Shop
              allImages={allImagesInfo}
              quantity={arrIncDecInfo}
              increment={increment}
              decrement={decrement}
              incrementInStore={incrementInStore}
              decrementInStore={decrementInStore}
              flowerSelectedByUser={flowerSelectedByUser}
            />
          }
        ></Route>
        <Route
          path="checkout"
          element={
            <Checkout
              getProducts={() => {
                const result = getProducts(
                  allImagesInfo,
                  arrIncDecInfo,
                  incrementInStore,
                  decrementInStore,
                  increment,
                  decrement
                );
                return result;
              }}
              getTotal={() => {
                return getTotal(allImagesInfo);
              }}
            />
          }
        ></Route>
        <Route
          path="details"
          element={<Details currentSelectedPlant={currentSelectedPlant} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
