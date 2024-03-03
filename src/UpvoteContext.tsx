import React, { createContext, useState, useEffect } from 'react';

interface Upvote {
    selected: boolean;
}

interface UpvoteContextType {
    upvotes: Upvote[];
    toggleUpvote: (index: number) => void;
    addUpvote: () => void;
}

const initialUpvotes: Upvote[] = JSON.parse(localStorage.getItem('upvotes') || '[]');

export const UpvoteContext = createContext<UpvoteContextType>({
    upvotes: initialUpvotes,
    toggleUpvote: () => { },
    addUpvote: () => { },
});

interface UpvoteProviderProps {
    children: React.ReactNode;
  }

export const UpvoteProvider: React.FC<UpvoteProviderProps> = ({children}) => {
    const [upvotes, setUpvotes] = useState<Upvote[]>(initialUpvotes);

    useEffect(() => {
        localStorage.setItem('upvotes', JSON.stringify(upvotes));
    }, [upvotes]);

    const toggleUpvote = (index: number) => {
        const newUpvotes = [...upvotes];
        newUpvotes[index].selected = !newUpvotes[index].selected;
        setUpvotes(newUpvotes);
    };

    const addUpvote = () => {
        setUpvotes([...upvotes, { selected: false }]);
    };

    return (
        <UpvoteContext.Provider value={{ upvotes, toggleUpvote, addUpvote }}>
            {children}
        </UpvoteContext.Provider>
    );
};


