import React from 'react';
import ZigZag from '../assets/Vector 3.png';

export default function Quote() {
    return (
        <div className="container text-center border-bottom pb-4 mb-2" style={{ marginTop: "20px"}}>
            <img src={ZigZag} style={{ width: "180px"}} className="float-left" />
            <h3 style={{ backgroundColor: "#90e0ef", marginTop: "30px", width: "900px"}} className="p-5">
                This blog picks fascinating stories from the web, only for you
            </h3>
        </div>
    );
}