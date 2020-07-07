import React from "react";

export const Navbar: React.FunctionComponent = () => {
    return (<nav>
        <div className="nav-wrapper deep-purple lighten-3 px1">
            <a href="/" className="brand-logo">Just do it</a>
            <ul className="right hide-on-med-and-down">
                <li><a href="/">Список дел</a></li>
                <li><a href="/">Информация</a></li>
            </ul>
        </div>
    </nav>);
}