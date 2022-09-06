import React from "react";
import { Routes, Route } from "react-router-dom";
import { Collection } from "../collection/Collection";
import { ProductCategories } from "../productCollections/ProductCategories";

export const Shop = () => {
  return (
    <section>
      Shop
      <Routes>
        <Route path="/" element={<ProductCategories />} />
        <Route path=":collectionId" element={<Collection />} />
      </Routes>
    </section>
  );
};
