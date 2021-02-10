import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props){
    const [isExpanded, setExpanded] = useState(false);
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
            // onClick={handleChange}
            value={note.content}
            placeholder="What would you like to do?"
            rows={isExpanded ? 3 : 1}
            />
            <Zoom in={isExpanded}>
        {/* Use of a Floating action button (Fab) */}
        <Fab onClick={submitNote}>
            <AddIcon />
        </Fab>
        </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;