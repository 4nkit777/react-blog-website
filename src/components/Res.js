import React from 'react'
import { Resources } from '../data';

export default function Res(){
    return (
        <div>
            <ul>
                {Resources.map((x, id) => (
                    <li key={id} style={{ listStyleType: "none" }}>{x}</li>
                ))}
            </ul>
        </div>
    );
}