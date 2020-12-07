import React from 'react';
import Discover from './Discover';
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
        </div>
    );
}