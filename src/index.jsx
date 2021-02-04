/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from './MarkdownInput';
import NoteDisplay from './NoteDisplay';

const App = () => {
  const [queryText, setQueryText] = React.useState("");
  const [queryTitle, setQueryTitle] = React.useState("");

  const onChangeText = (event) => {
    setQueryText(event.target.value);
  }

  const onChangeTitle = (event) => {
    setQueryTitle(event.target.value);
  }
 console.log("QUERY TEXT:", queryText)
 console.log("QUERY TITLE:", queryTitle)
  return (
    <>
      <MarkdownInput onChangeTitle={onChangeTitle} onChangeText={onChangeText} />
      <NoteDisplay title={queryTitle} text={queryText} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
