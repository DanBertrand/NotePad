/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from './MarkdownInput';
import NoteDisplay from './NoteDisplay';
import './sass/style.scss'

const App = () => {
  const [queryText, setQueryText] = React.useState("");
  const [queryTitle, setQueryTitle] = React.useState("");
  const [savedNote, setsavedNote] = React.useState("");

  const onChangeText = (event) => {
    setQueryText(event.target.value);
  }

  const onChangeTitle = (event) => {
    setQueryTitle(event.target.value);
  }

  const handleSave = () => {
    const toSave = JSON.stringify({title:queryTitle, text:queryText})
    localStorage.setItem('note', toSave);

  }
  
//  console.log("SAVED:", JSON.parse(localStorage.getItem('note')))
  return (
    <div className="page">
      <div className="menu">
        MENU 
      </div>
      <div className="entries">
        <div className="display">
          <NoteDisplay title={queryTitle} text={queryText} />
        </div>
        <div className="input">
          <MarkdownInput onChangeTitle={onChangeTitle} onChangeText={onChangeText} handleSave={handleSave} />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
