import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import NavbarFull from './components/NavbarFull';
import Hero from './components/Hero';
import Description from './components/Description';
import PropertiesSection from './components/PropertiesSection';
import Footer from './components/Footer';
import 'materialize-css/dist/css/materialize.min.css';
import './css/app.css';
import M from 'materialize-css';

M.AutoInit();

function App() {
    return (
        <Provider store={store}>
            <NavbarFull />
            <Hero />
            <Description />
            <PropertiesSection />
            <Footer />
        </Provider>
    );
}

export default App;
