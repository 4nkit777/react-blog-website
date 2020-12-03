import React, { useState, useEffect } from "react";
import { get } from "../fetch";

export default function CenterSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    get("./center-feed").then((centerSectionFeed) =>
      setData(centerSectionFeed.data)
    );
  }, []);

  return (
    <div>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <div
          className="card shadow"
          style={{
            width: "32rem",
            height: "40rem",
            backgroundColor: "#fffffc",
          }}
        >
          {data.map(({ id, imgSrc }) => (
            <img
              src={imgSrc}
              style={{ width: "32rem", height: "20rem" }}
              key={id}
            />
          ))}
          <div className="card-body">
            {data.map(({ id, title, source, subText, readTime }) => (
              <div key={id}>
                <h3>{title}</h3>
                <h6 style={{ color: "grey" }}>
                  {source} + {readTime}
                </h6>
                <h5 style={{ color: "#343a40" }}>{subText}</h5>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
