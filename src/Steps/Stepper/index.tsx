import React from 'react'

import { useLocation } from "react-router-dom";

import tw from "tailwind-styled-components"


const Li = tw.li`
     text-slate-600
`;

function Stepper() {
    const location = useLocation();

    const getLinkClass = (path: string) => {
        return (
            "nav-link" + (path === location.pathname ? "active" : "")
        );
    };

    return (
        <nav className="stepper navbar navbar-expand-lg">
            <div className="collapse navbar-collapse">
                <ol className="navbar-nav">
                    <Li >
                        <p className={getLinkClass("/")}>Contact</p>
                    </Li>
                    <Li >
                        <span className={getLinkClass("/education")}>Education</span>
                    </Li>
                    <Li >
                        <span className={getLinkClass("/about")}>About</span>
                    </Li>
                    <Li >
                        <span className={getLinkClass("/confirm")}>Confirm</span>
                    </Li>
                </ol>
            </div>
        </nav>
    )
}

export default Stepper
