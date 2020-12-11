import React from 'react';
import BottomFooter from './BottomFooter';
import Discover from './Discover';
import Fascinating from './Fascinating';
import Footer from './Footer';
import MainView from './MainView';
import NavBar from './NavBar';
import Quote from './Quote';

export default function MainScreen() {
    return (
        <div>
            <NavBar />
            <MainView />
            <Discover />
            <Quote />
            <Fascinating />
            <Footer />
            <BottomFooter />
        </div>
    );
}