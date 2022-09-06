import React from "react";
import { useParams } from "react-router-dom";

export const Collection = () => {
  const { collectionId } = useParams();

  return <section>Collection: {collectionId}</section>;
};
