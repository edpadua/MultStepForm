



import { useLocation } from "react-router-dom";


import tw from "tailwind-styled-components"


const Li = tw.li`
     text-slate-600
     lg:text-2xl
     font-bold
     text-base
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
                        <p className={getLinkClass("/")}>Contato</p>
                    </Li>
                    <Li >
                        <span className={getLinkClass("/education")}>Educação</span>
                    </Li>
                    <Li >
                        <span className={getLinkClass("/about")}>Sobre</span>
                    </Li>
                    <Li >
                        <span className={getLinkClass("/confirm")}>Confirmar</span>
                    </Li>
                </ol>
            </div>
        </nav>
    )
}

export default Stepper
