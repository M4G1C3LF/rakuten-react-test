import React from "react";
import './Header.css';
import RakutenLogo from "../../Logo/RakutenLogo/RakutenLogo";

export default () => {
    return <header className="layout-header">
        <div className="w-100">
            <RakutenLogo className="position-abolute" fillColor="#ffffff"/>
            <div className="header-links">
                {getHeaderLink({ title: "Inicio", url: "https://www.rakuten.tv/es/" })}
                {getHeaderLink({ title: "Tienda", url: "https://www.rakuten.tv/es/gardens/store" })}
                {getHeaderLink({ title: "Gratis", url: "https://www.rakuten.tv/es/gardens/free" })}
                {getHeaderLink({ title: "Canales TV", url: "https://www.rakuten.tv/es/live_channels" })}
            </div>
        </div>
        <div className="w-100 float-right">
        <span>
            <strong>Iniciar Sesión</strong> o <strong>Registrarse</strong>
        </span>
        </div>
    </header>;
}   

const getHeaderLink = (args: { title: string, url: string }) => {
    return <span className="m-1">
        <strong>
            <a href={args.url}>{args.title}</a>
        </strong>
    </span>
}