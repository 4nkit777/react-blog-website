import React from 'react';
import Product from './Prod';
import Comp from './Comp';
import Res from './Res';
import DownloadApp from './DownloadApp';
// import { Product, Company, Resources } from '../data';

export default function Footer() {
    return (
        <div className="container d-flex flex-row justify-content-between mt-5 border-top pt-3">
            <Product />
            <Comp />
            <Res />
            <DownloadApp />
        </div>
    );
}