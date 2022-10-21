import React, { useState } from 'react';

const Tabs = ({tab, setTab}) => {
    const [open, setOpen] = useState(true);

    const toggleTab = (tabName) => {
        setOpen(true);
        setTab(tabName)
    }

    return (<>
        <button aria-label="Toggle hamburger menu" className="hamburger" onClick={() => setOpen(!open)}><i className="fas fa-bars"></i></button>
        <nav className={`tabs${open ? " open" : ""}`}>
            <ul>
                <li className={`${tab === "favourites" ? "active" : ""} favourites`}><button onClick={() => toggleTab("favourites")}><span><i className="fas fa-star"></i></span>Favourites</button></li>
                <li className={`${tab === "random" ? "active" : ""}`}><button onClick={() => toggleTab("random")}>New Joke</button></li>
            </ul>
        </nav>
    </>)
}

export default Tabs;