import React, { useState, useEffect } from "react";
import { get } from "../fetch";

export default function AsideRight() {
  const [data, setData] = useState(null);

  useEffect(() => {
    get("./right-aside-feed").then((asideFeedResponse) =>
      setData(asideFeedResponse.data)
    );
  }, []);

  return (
    <aside style={{ width: "17rem", marginLeft: "20px" }}>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <div
          className="card shadow"
          style={{ width: "16rem", margin: "0px", backgroundColor: "#fff1e6" }}
        >
          {data.map(({ id, title, message, imgSrc }) => (
            <div className="card-body" key={id}>
              {/* {imgSrc.map((x) => (
                                <img src={x} style={{ width: '14rem', height: '8rem'}} />
                            ))} */}
              <img
                src={imgSrc}
                style={{ width: "13.5rem", height: "8rem" }}
                className="card-img-top"
              />
              <h3>{title}</h3>
              <p>{message}</p>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
