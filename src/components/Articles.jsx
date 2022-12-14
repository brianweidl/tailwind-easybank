import React from 'react';

import Article from './Article';

import image1 from '../images/image-currency.jpg';
import image2 from '..//images/image-restaurant.jpg';
import image3 from '..//images/image-plane.jpg';
import image4 from '..//images/image-confetti.jpg';

const articles = [
	{
		title: ' Receive money in any currency with no fees',
		author: 'Claire Robinson',
		text: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
		image: image1,
	},
	{
		title: ' Treat yourself without worrying about money',
		author: 'Wilson Hutton',
		text: '  Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
		image: image2,
	},
	{
		title: 'Take your Easybank card wherever you go',
		author: 'Wilson Hutton',
		text: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
		image: image3,
	},
	{
		title: ' Our invite-only Beta accounts are now live!',
		author: 'Claire Robinson',
		text: ' After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
		image: image4,
	},
];

function Articles() {
	return (
		<section className=" bg-veryLightGray  ">
			<div className="flex flex-col items-center justify-center py-16 px-6 md:container md:mx-auto md:items-start md:px-16">
				<h3 className="text-3xl px-8 pb-6 md:px-0"> Latest Articles</h3>
				<div className="flex flex-col md:flex-row  md:space-x-8">
					{articles.map((article) => (
						<Article key={article.title} {...article} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Articles;
