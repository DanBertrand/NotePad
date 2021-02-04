import React from 'react';
import './style.scss'

const MarkdownInput = ( {onChangeTitle, onChangeText, handleSave} ) => {



return (
	< div className="container">
		<input type="text" placeholder="Title" onChange={onChangeTitle}></input>
  		<textarea placeholder="Your text ..." onChange={onChangeText}></textarea>
		<button type="button" onClick={handleSave}>Save</button>
  	</div>
	 );
};

export default MarkdownInput;
