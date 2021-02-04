import React from 'react';
import Showdown from 'showdown';

const NoteDisplay = ( {title, text} ) => {
	
		const converter = new Showdown.Converter();
		const titleContent = converter.makeHtml(title);
		const textContent = converter.makeHtml(text)

		const createMarkup = (text) => {
  		return {__html: text};
		}

		function myComponent(text) {
  		return <div dangerouslySetInnerHTML={createMarkup(text)} />;
		}

		return(
			<>
			<div>{myComponent(titleContent)}{myComponent(textContent)}</div>
			</>
		)
};

export default NoteDisplay;
