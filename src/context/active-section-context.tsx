import React, { useState, createContext } from 'react';
import { links } from '../lib/data';
import { useContext } from 'react';

type SectionName = typeof links[number]['name'];

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};

type ActiveSectioncontexType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
};

export const ActiveSectionContext = createContext<ActiveSectioncontexType | null>(null);


export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0)

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick,
            }}>
            {children}
        </ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
    if (context === null) {
        throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider')
    }
    return context;
}
