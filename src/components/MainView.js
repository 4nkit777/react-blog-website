import React from "react";
import AsideLeft from "./AsideLeft";
import CenterSection from "./CenterSection";
import AsideRight from "./AsideRight";

export default function MainView() {
  return (
    <div className="container mt-3">
      <h2 className="pt-3">Discover the best of the web</h2>
      <h5>Today's news</h5>
      <div className="d-flex justify-content-center">
        <AsideLeft />
        <CenterSection />
        <AsideRight />
      </div>
    </div>
  );
}
