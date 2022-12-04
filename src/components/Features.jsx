import React from 'react';
import Feature from './Feature';
import icon1 from '..//images/icon-online.svg';
import icon2 from '..//images/icon-budgeting.svg';
import icon3 from '..//images/icon-onboarding.svg';
import icon4 from '..//images/icon-api.svg';

const features = [
	{ title: 'Online Banking', text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world', icon: icon1 },
	{ title: ' Simple Budgeting', text: ' See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.', icon: icon2 },
	{ title: 'Fast Onboarding', text: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.', icon: icon3 },
	{ title: 'Open API', text: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.', icon: icon4 },
];

function Features() {
	return (
		<section className=" flex flex-col items-center justify-center space-y-16 bg-lightGrayishBlue mt-16 py-12 px-4 text-center md:mt-0 md:text-start md:items-start md:px-16 md:py-24">
			<article className="md:w-[45%]">
				<h3 className="text-3xl px-16 md:px-0 md:text-4xl"> Why choose Easybank?</h3>
				<p className="my-4 text-grayishBlue">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
			</article>
			<div className="flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-9 ">
				{features.map((feature) => (
					<Feature key={feature.title} {...feature} />
				))}
			</div>
		</section>
	);
}

export default Features;
