import React from 'react';

const Social = [
    <span><i class="fab fa-instagram"></i></span>,
    <span><i class="fab fa-twitter"></i></span>,
    <span><i class="fab fa-twitch"></i></span>
];

export default function BottomFooter() {
    return (
        <div className="container d-flex flex-row justify-content-between border-top mt-4 pt-4">

            <div className="col-md-6">
                <h5>Blog is part of the Sil family of products</h5>
            </div>
            <div className="col-md-6" >
                <ul className="d-flex flex-row justify-content-end p-0">
                    {Social.map((x, id) => (
                        <li key={id} style={{ listStyleType: "none" }}>{x}</li>
                    ))}
                </ul>
            </div>
        </div>


    );
}