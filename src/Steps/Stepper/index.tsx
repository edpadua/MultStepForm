

import {useContext } from 'react'

import { useLocation } from "react-router-dom";

import { AppStateContext } from '../../state';

import type { AppStateContextType } from "../../@types/multistep.d.ts"

import tw from "tailwind-styled-components"


const Li = tw.li`
     text-slate-600
     text-2xl
     font-bold
     text-size
     mr-4
`;

function Stepper() {
    const location = useLocation();

   

    const getLinkClass = (path: string) => {
        return (
            "nav-link " + (path === location.pathname ? "text-indigo-600" : "")
        );
    };

    return (
        <nav className="stepper navbar navbar-expand-lg">
            <div className="navbar-collapse mb-10">
                <ol className="navbar-nav flex">
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
