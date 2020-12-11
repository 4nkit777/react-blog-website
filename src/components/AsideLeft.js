import React, { useState, useEffect } from "react";
import { get } from "../fetch";

export default function AsideLeft() {
  const [data, setData] = useState(null);

  useEffect(() => {
    get("/left-feed").then((asideFeedResponse) =>
      setData(asideFeedResponse.data)
    );
  }, []);

  return (
    <aside style={{ padding: "0px", width: "17rem" }}>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <div
          className=" shadow"
          style={{ width: "16rem", margin: "0px",  }}
        >
          {data.map(({ id, image, title, source, minuteRead }) => (
            <div className="card-body" key={id}>
              <img
                src={image}
                style={{ width: "13.5rem", height: "8rem" }}
                className="card-img-top border rounded"
              />
              <h5 className="mt-2">{title}</h5>
              <p style={{ color: "grey" }}>{source} <span><i class="fas fa-dot-circle"></i></span> {minuteRead}</p>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
