import React from 'react';
import MainView from './MainView';
import NavBar from './NavBar';

export default function MainScreen() {
    return (
        <div>
            <NavBar />
            <MainView />
        </div>
    );
}