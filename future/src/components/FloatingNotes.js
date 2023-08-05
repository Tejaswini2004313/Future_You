import React, { useState } from 'react';
import { EditIcon } from '@chakra-ui/icons';

const FloatingNotes = ({ major, subfield }) => {
    const authToken = localStorage.getItem('jwtToken');
    const [showTextbox, setShowTextbox] = useState(false);
    const [notes, setNotes] = useState('');

    const handleNotes = () => {
        fetch('http://localhost:8082/api/addNotes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({ major, subfield, notes }), // Include the notes in the request body
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server if needed
                console.log('Notes saved:', data);
                setShowTextbox(false); // Hide the textbox after saving the notes
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div
            style={{

                cursor: 'pointer',
            }}
        >
            {showTextbox && (
                <div
                    style={{

                        background: '#fff',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        padding: '10px',
                        borderRadius: '4px',
                        zIndex: '1',
                    }}
                >
                    <textarea
                        rows={4}
                        cols={30}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)
                        }
                    />
                    <button onClick={handleNotes}>OK</button>
                </div>
            )}
            <EditIcon
                size={24}
                onClick={() => {
                    setShowTextbox(!showTextbox); // Toggle the visibility of the textbox
                }}
            />
        </div>
    );
};

export default FloatingNotes;
