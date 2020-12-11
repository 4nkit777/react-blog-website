import React, { useEffect, useState } from 'react';
import { get } from '../fetch';

export default function Discover() {

    const [data, setData] = useState(null);

    useEffect(() => {
        get('./discover-feed').then(discoverResponse => setData(discoverResponse.data));
    }, []);

    return (
        <div className="container mt-5 border-top border-bottom p-5 mb-4">
            <h3 className="text-center mb-4 "style={{ fontWeight: "600" }} >Discover More Topics</h3>
            {!data ? (<p>Loading...</p>) : (
                <ul className="list-group d-flex flex-sm-row justify-content-between">
                    {data.map((x) => (
                        <li className="border-0 bg-dark text-light text-center rounded-pill p-1 mb-2" style={{ listStyleType: "none", width: "120px"}}>
                            {x}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}