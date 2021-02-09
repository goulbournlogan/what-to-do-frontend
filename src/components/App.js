import React, { useState } from 'react';
import footer from './Footer';

//this is a function for the creation of new notes
function App() {
    const [notes, setNotes] = useState([]);
    function addNote(newNote){
        setNotes(previousNotes => {
            return [
                ...previousNotes, newNote
            ];
        });
    }
    
    //this is a function that selects a note using id and deletes it
    function deleteNote(id) {
        setNotes(previousNotes => {
            return previousNotes.filter((noteItem, index) => {
                return index !== id
            });
        });
        
    }
    return (
        <div>
            <Header />
            <createArea onAdd = {addNote} />
            {notes.map((noteItem, index) => {
                return(
                    <Note 
                    key={index} 
                    id = {index}  
                    title = {noteItem.title} 
                    content = {noteItem.content}
                    onDelete = {deleteNote}
                    />
                );
            })};
            <Footer /> 
        </div>
    );
}

export default App;