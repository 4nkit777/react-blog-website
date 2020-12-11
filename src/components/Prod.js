import React from 'react'
import { Products } from '../data';

export default function Prod(){
    return (
        <div>
            <ul>
                {Products.map((x, id) => (
                    <li key={id} style={{ listStyleType: "none" }}>{x}</li>
                ))}
            </ul>
        </div>
    );
}