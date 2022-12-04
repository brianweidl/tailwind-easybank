import React from 'react';
import mockUps from '..//images/image-mockups.png';
import RequestButton from './RequestButton';
import bgMobile from '../images/bg-intro-mobile.svg';
import bgDesktop from '../images/bg-intro-desktop.svg';

function Hero() {
	return (
		<section className="relative z-0  flex flex-col items-center justify-center pb-9">
			<div className="flex justify-center ">
				<img src={bgMobile} className="absolute" />
				<img src={mockUps} className="relative -top-24"></img>
			</div>
			<div className="px-4 pt-0 pb-12">
				<h1 className="text-center text-5xl text-darkBlue pb-6 font-sans"> Next generation digital banking</h1>
				<p className="text-center text-grayishBlue text-sm ">
					{' '}
					Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
				</p>
			</div>
			<RequestButton />
		</section>
	);
}

export default Hero;
