import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from './MarkdownInput';
import NoteDisplay from './NoteDisplay';

const App = () => {
  <>
    <MarkdownInput />
    {/* <NoteDisplay /> */}
  </>;
};

ReactDOM.render(<App />, document.getElementById('root'));
