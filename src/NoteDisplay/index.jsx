import React from 'react';
import Showdown from 'showdown';
import './style.scss'

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
			<div className="displayScreen">
				<h1>{myComponent(titleContent)}</h1>
				<div className="content">
					{myComponent(textContent)}
				</div>
			</div>
		)
};

export default NoteDisplay;
