import React from 'react';
import { BiBookmark } from 'react-icons/bi';



const FloatingBookmark = ({ major, subfield }) => {
    const authToken = localStorage.getItem('jwtToken');
    const handleBookmark = () => {
        fetch('http://localhost:8082/api/addNotes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({ major, subfield }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server if needed
                console.log('Bookmark saved:', data);

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                background: '#fff',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                padding: '10px',
                borderRadius: '50%',
                cursor: 'pointer',
            }}
        >
            <BiBookmark size={24} onClick={handleBookmark} />
        </div>
    );
};

export default FloatingBookmark;
