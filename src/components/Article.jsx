import React from 'react';

function Feature({ author, image, text, title }) {
	return (
		<article className="bg-white flex flex-col items-center justify-center space-y-6 rounded mb-8 md:w-72">
			<img className="rounded  md:h-60" src={image}></img>
			<div className="px-4 pb-4">
				<span className="text-grayishBlue text-xs">By {author}</span>
				<h4 className="text-xl my-3">{title}</h4>
				<p className="text-grayishBlue text-sm">{text}</p>
			</div>
		</article>
	);
}

export default Feature;
