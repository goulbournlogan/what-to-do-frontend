import React, { useState } from 'react'

function createArea(props){
    const [isExpended, setExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    
    function handleChange(e){
        const {name, value} = e.target;
        setNote (previousNote => {
            return {
                ...previousNote, [name]:value 
            };
        });
    }
    function submitNote(e) {
        props.onAdd(note); 
        setNote({
            title: "",
            content: ""
        });
        e.preventDefault();
    };

    function expand() {
        setExpanded(true);
    } 
    return(
        <div>
            <form className="create note">
            {isExpanded && (
                <input 
                name="title"
                onChange={handleChange}
                value={note.content}
                placeholder="title"
                />            
                )}
            
            <textarea
            name="content"
            onClick={expand}
            onClick={handleChange}
            value={note.content}
            placeholder="What would you like to do?"
            rows={isExpanded ? 3 : 1}
            />
            </form>
        </div>
    );
}

export default createArea;