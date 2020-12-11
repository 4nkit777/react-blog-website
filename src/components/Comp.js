import React from 'react'
import { Company } from '../data';

export default function Comp(){
    return (
        <div>
            <ul>
                {Company.map((x, id) => (
                    <li key={id} style={{ listStyleType: "none" }}>{x}</li>
                ))}
            </ul>
        </div>
    );
}