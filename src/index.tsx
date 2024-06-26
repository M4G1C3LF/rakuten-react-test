import React from 'react'
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import App from './App';
import './index.css';
import store from './store';


const container = document.getElementById('root')!
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
