import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';

function CreationArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const {value, name} = event.target;

        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function submitNote (event) {
        event.preventDefault();
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
    }

    return ( 
    <div>
        <form className='create-note'>
            <input name="title" placeholder='Title' value={note.title} onChange={handleChange}></input>
            <textarea name="content" placeholder='Content' value={note.content} onChange={handleChange}></textarea>
            <button onClick={submitNote}>
                <AddIcon />
            </button>
        </form>        
    </div>
    )}

export default CreationArea;