import React, { useState, useEffect } from "react";
import { get } from "../fetch";

export default function AsideLeft() {
  const [data, setData] = useState(null);

  useEffect(() => {
    get("/aside-feed").then((asideFeedResponse) =>
      setData(asideFeedResponse.data)
    );
  }, []);

  return (
    <aside style={{ padding: "0px", width: "17rem" }}>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <div
          className="card shadow"
          style={{ width: "16rem", margin: "0px", backgroundColor: "#fff1e6" }}
        >
          {data.map(({ id, title, source, imgSrc }) => (
            <div className="card-body" key={id}>
              {/* {imgSrc.map((x) => (
                                <img src={x} style={{ width: '14rem', height: '8rem'}} />
                            ))} */}
              <img
                src={imgSrc}
                style={{ width: "13.5rem", height: "8rem" }}
                className="card-img-top"
              />
              <h5>{title}</h5>
              <p style={{ color: "grey" }}>{source}</p>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
