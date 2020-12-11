import React from 'react'
import { AppPlatforms } from '../data';

export default function DownloadApp(){
    return (
        <div>
            <ul>
                {AppPlatforms.map((x, id) => (
                    <li key={id} style={{ listStyleType: "none" }}>{x}</li>
                ))}
            </ul>
        </div>
    );
}