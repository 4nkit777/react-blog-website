import React, { useState, useEffect } from 'react';
import { get } from '../fetch';

export default function Fascinating() {

    const [data, setData] = useState(null);

    useEffect(() => {
        get("./fascinating-feed").then((fascinatingResponse) => setData(fascinatingResponse.data));
    }, []);

    return (
        <div className="container">
            {!data ? (<p>Loading...</p>) : (
                <div className="mt-5">
                    <h4 className="mb-4" style={{ fontWeight: "600" }}>Fascinating stories</h4>
                    <ul className="p-0 m-2">
                        {data.map(({ id, image, title, source, readTime, subText }) => (
                            <li key={id} className="mb-2 d-flex shadow" style={{ listStyleType: "none" }} >
                                <span className="order-0 p-2">
                                    <img src={image} style={{ width: "240px", height: "160px" }} className="border rounded" />
                                </span>
                                
                                <div className="card-body d-flex flex-column  order-1">
                                    <h3 className="flex-grow-1" style={{ fontWeight: "600"}} >{title}</h3>
                                    <h5 style={{ color: "gray"}} >
                                        {source}
                                        <span> <i class="fas fa-dot-circle"></i> </span>
                                        {readTime}
                                      </h5>
                                    <h4>{subText}</h4>
                                </div>
                            </li>
                            
                        ))}
                    </ul>
                </div>

            )}
        </div>
    );
}