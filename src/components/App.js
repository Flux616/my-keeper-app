import React, { useState } from "react";
import Header from "./Header";
import CreationArea from "./CreationArea";
import Note from "./Note";
import Footer from "./Footer";

function App() {

  const [noteList, setNoteList] = useState([]);

  function addNote (note) {
    setNoteList (prevItems => {
      return [...prevItems, note]
    });
  };

  function deleteNote (id) {
    setNoteList(prevItems => {
      return prevItems.filter((noteList, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreationArea onAdd={addNote} />
      {noteList.map ((item, index) => {
        return <Note 
                title={item.title}
                content={item.content}
                key={index}
                id={index}
                onDelete={deleteNote}
               />
      })}
      <Footer />
    </div>
  );
}

export default App;
