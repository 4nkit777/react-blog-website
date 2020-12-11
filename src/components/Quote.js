import React from 'react';
import ZigZag from '../assets/Vector 3(1).png';
import '../imgClassStyle.css';

export default function Quote() {
    return (
        <div className="container border-bottom pb-5" >
            {/* <span className="position-relative">
                <img src={ZigZag} style={{ width: "180px" }} className="position-absolute" />
            </span> */}
            <img src={ZigZag} style={{ width: "180px", top: "30px" }} className="position-relative" />
            <div className="d-flex justify-content-center">
                <h3 style={{ backgroundColor: "#90e0ef", width: "900px", fontWeight: "600" }} className="p-5 text-center">
                    This blog picks fascinating stories <br /> from the web, only for you
                </h3>
            </div>
        </div>
        // <div className="container">
        //     <blockquote style={{ backgroundColor: "#90e0ef", width: "500px" }} className="p-3 text-center position-absolute d-flex justify-content-between" >
        //         <span>
        //             <img src={ZigZag} style={{ width: "180px", right: "100px", top: "8px" }} className="position-relative" />
        //         </span>
        //         <h3>This blog picks fascinating stories from the web, only for you</h3>
        //     </blockquote>
        // </div>
        // <div className="container">
        //     <img src={ZigZag} style={{ width: "180px" }} className="img-class" />
        //     {/* <div className="container">
        //         <h3 style={{ backgroundColor: "#90e0ef", marginTop: "30px", width: "900px"}} className="p-5">
        //                 This blog picks fascinating stories from the web, only for you
        //         </h3>
        //     </div> */}
        //     <h3 style={{ backgroundColor: "#90e0ef", marginTop: "30px", width: "900px"}} className="p-5 d-inline">
        //             This blog picks fascinating stories from the web, only for you
        //     </h3>
        // </div>
    );
}