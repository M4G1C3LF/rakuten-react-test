import React from "react";
import './Footer.css';

export default () => {
    const actualYear = new Date().getFullYear();
    return <footer className="layout-footer">
        <div className='footer-content'>
            © {actualYear} - Sergio Balaguer Carmona
        </div>
    </footer>;
}   