import React from 'react';

function Feature({ icon, text, title }) {
	return (
		<article className="flex flex-col items-center justify-center space-y-5 md:items-start ">
			<img src={icon}></img>
			<h4 className="text-2xl">{title}</h4>
			<p className="text-grayishBlue">{text}</p>
		</article>
	);
}

export default Feature;
