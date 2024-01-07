import { useState } from "react";

const About = () => {
    const [isTextExpanded, setIsTextExpanded] = useState(false);

    const toggleTextExpansion = () => {
        setIsTextExpanded(!isTextExpanded);
    };

    return (
        <div
            id='about'
            className="min-h-screen bg-cover bg-center flex flex-col justify-center text-center text-slate-950 bg-fixed w-full"
            style={{ backgroundImage: "url(src/assets/bmw_bg.avif)" }}>
            <div className="bg-slate-100 text-balance p-6 sm:p-12 sm:px-48">

                <h1 className="font-semibold pb-9">Über Uns</h1>

                <p className="font-bold text-3xl sm:text-4xl pb-9">Willkommen bei <span className="font-bold text-5xl">Auto Trentzsch</span> <br /> Ihr automobiler Anlaufpunkt seit 1988!</p>
                <span></span>
                <p className="">Bei Auto Trentzsch sind wir stolz auf unsere lange Geschichte und Hingabe, erstklassige Kfz-Dienstleistungen anzubieten, seit Horst Niebergall das Unternehmen am 1. Juni 1988 gründete. Im Laufe der Jahre haben wir ein signifikantes Wachstum erlebt und Herausforderungen erfolgreich gemeistert, um Ihr Vertrauenswerkstatt zu werden.</p>

                <h2 className="font-semibold p-9 text-2xl">Unsere Vision:</h2>

                <p className="">Bei Auto Trentzsch ist unsere Vision einfach: Ihr vertrauenswürdiger Anlaufpunkt für alles rund ums Auto zu sein. Mit über 35 Jahren Erfahrung bleiben wir leidenschaftlich im Automobilbereich und engagieren uns für die Zufriedenheit unserer Kunden.</p>

            </div>
            <div className="bg-[#222222] bg-opacity-60 sm:px-48 sm:text-balance text-pretty p-6 sm:p-12 table border border-none text-slate-100">
                <div className="table-cell border border-none ">
                    <h2 className="font-semibold p-9 text-2xl">Unsere Geschichte:</h2>

                    <p className={`text-xl sm:overflow-hidden ${isTextExpanded ? "max-h-full" : "max-h-56"}`}>Von unseren bescheidenen Anfängen in Dresden-Nord, wo wir Teile für den Importhandel in Berlin und für Automot Heidenau regenerierten, bis zur Transformation in eine unabhängige Werkstatt im September 1990, wurde jeder Schritt von Leidenschaft für Autos und dem Streben
                        <br />
                        Im Jahr 1993 zogen wir in die Bodenbacher Str. 109 in Dresden um und gründeten das Unternehmen Günter Trentzsch Kfz-Specialbetrieb. Ein aufregendes Bauprojekt zwischen 1995 und 1997 endete im Juni 1997. Dieser Erfolg war nur durch die Zusammenarbeit unserer Familie, Freunde
                        <br />
                        Das Jahr 2002 markierte die Eröffnung unserer zweiten Werkstatt in der Hamburger Str. 35a, Dresden, geleitet von meinem Sohn Enrico. Trotz anfänglicher Herausforderungen haben wir uns erfolgreich entwickelt und beschäftigen derzeit
                        <br />
                        Die Expansion setzte sich 2007 fort, als wir das Unternehmen Reifenhandel - Waschanlage in Radeburg erwarben und 2008 unsere dritte Werkstatt eröffneten. Diese Erweiterung ermöglichte es uns, unsere Einrichtungen zu modernisieren und sicherzustellen, dass wir weiterhin erstklassige Dienstleistungen anbieten.
                    </p>
                </div>
            </div>
            <a className="sm:hidden bg-slate-100" onClick={toggleTextExpansion} href='#overflow'> {isTextExpanded ? "Show Less" : "Show More"}</a>
        </div>
    );
}

export default About;
