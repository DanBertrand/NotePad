import React from 'react';

const MarkdownInput = ( {onChangeTitle, onChangeText} ) => {

return (
	<>
  		<p>Markdown</p>
		<input type="text" onChange={onChangeTitle}></input>
  		<textarea onChange={onChangeText}></textarea>
  	</>
	 );
};

export default MarkdownInput;
