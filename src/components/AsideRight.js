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
    <aside style={{ width: "17rem", marginLeft: "20px" }} className="ml-2 p-0" >
      {!data ? (
        <p>Loading...</p>
      ) : (
        <div
          className="card shadow"
          style={{ width: "16rem", margin: "0px"}}
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
              <h5 className="mt-2">{title}</h5>
              <p style={{ color: "grey" }}>{message} <span><i class="fas fa-dot-circle"></i></span></p>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
