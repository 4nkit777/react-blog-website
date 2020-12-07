import React, { useState, useEffect } from "react";
import { get } from "../fetch";


export default function CenterSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    get("./center-data-feed").then((centerSectionFeed) =>
      setData(centerSectionFeed.data)
    );
  }, []);

  return (
    // <div>
    //   {!data ? (
    //     <p>Loading...</p>
    //   ) : (
    //     <div
    //       className="card shadow"
    //       style={{
    //         width: "32rem",
    //         height: "34rem",
    //         backgroundColor: "#fffffc",
    //       }}
    //     >
    //       {data.map(({ id, image }) => (
    //         <img
    //           src={image}
    //           style={{ width: "32rem", height: "20rem" }}
    //           key={id}
    //         />
    //       ))}
    //       <div className="card-body">
    //         {data.map(({ id, title, source, minuteRead, subText }) => (
    //           <div key={id}>
    //             <h3>{title}</h3>
    //             <h6 style={{ color: "grey" }}>
    //               {source} + {minuteRead}
    //             </h6>
    //             <h5 style={{ color: "#343a40" }}>{subText}</h5>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   )}
    // </div>
    <div>
        {!data ? (<p>Loading...</p>) : (
        <div>
            <ul className="m-0 p-0">
                {data.map(({ id, image, title, source, minuteRead,subText }) => (
                    <li className="card mb-2 d-flex" key={id} >
                        <img src={image} style={{ width: "35.5rem", height: "22rem", borderTopRightRadius: "5px", borderTopLeftRadius: "5px" }} alt="" className="align-self-center" />
                        <div className="card-body">
                            <h3>{title}</h3>
                            <h6>{source} + {minuteRead}</h6>
                            <h5>{subText}</h5>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        )}
    </div>
  );
}
