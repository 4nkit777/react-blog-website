import React, { useState, useEffect } from 'react';
import { get } from '../fetch';

export default function MainCard() {

    const [data, setData] = useState(null);

    useEffect(() => {
        get("/center-data-feed").then((centerFeedResponse) => setData(centerFeedResponse));
    }, []);

    return (
        <ul>
            {data.map(({ id, title, source, readTime, subText, imgSrc }) => (
                <li className="card" key={id} >
                    <img src={imgSrc} style={{ width: "32rem", height: "20rem" }}  />
                    <div className="card-body">
                        <h3>{title}</h3>
                        <h6>{source} + {readTime}</h6>
                        <h5>{subText}</h5>
                    </div>
                </li>
            ))}
        </ul>
    );
}