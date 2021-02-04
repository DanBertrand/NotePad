import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from './MarkdownInput';
import NoteDisplay from './NoteDisplay';
import Menu from './Menu'
import './sass/style.scss'

const App = () => {
  const [queryText, setQueryText] = React.useState("");
  const [queryTitle, setQueryTitle] = React.useState("");
  const [savedNotes, setsavedNotes] = React.useState([]);

  const onChangeText = (event) => {
    setQueryText(event.target.value);
  }

  const onChangeTitle = (event) => {
    setQueryTitle(event.target.value);
  }

  const handleSave = () => {
    const index = savedNotes.length
    const toSave = JSON.stringify({id:index, title:queryTitle, text:queryText});
    localStorage.setItem('note', toSave);
     setsavedNotes(savedNotes => [...savedNotes, toSave])
  }

  return (
    <div className="page">
      <div className="menu">
        <Menu savedNotes={savedNotes} /> 
      </div>
      <div className="entries">
        <div className="display">
          <NoteDisplay title={queryTitle} text={queryText} />
        </div>
        <div className="input">
          <MarkdownInput onChangeTitle={onChangeTitle} onChangeText={onChangeText} handleSave={handleSave}/>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
