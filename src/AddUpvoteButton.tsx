import React, { useContext } from 'react';
import { UpvoteContext } from './UpvoteContext';

const AddUpvoteButton: React.FC = () => {
    const { addUpvote } = useContext(UpvoteContext);

    const handleAddUpvote = () => {
        addUpvote();
    };

    return (
        <button onClick={handleAddUpvote} style={{ background: '#F4F6F8' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5C11.4477 5 11 5.45098 11 5.99078V11H5.99078C5.44359 11 5 11.4439 5 12C5 12.5523 
                5.45098 13 5.99078 13H11V18.0092C11 18.5564 11.4439 19 12 19C12.5523 19 13 18.549 13 
                18.0092V13H18.0092C18.5564 13 19 12.5561 19 12C19 11.4477 18.549 11 18.0092 11H13V5.99078C13
                 5.44359 12.5561 5 12 5Z" fill="#343A40" />
            </svg>
        </button>
    );
};

export default AddUpvoteButton;
