import React from 'react';
import mockUps from '..//images/image-mockups.png';
import RequestButton from './RequestButton';

function Hero() {
	return (
		<>
			<section className=" z-0  flex flex-col items-center justify-center pb-9 md:flex-row-reverse md:justify-between md:container md:mx-auto ">
				<div className="hidden md:block w-96 h-[650px]"></div>
				<div className="background  flex justify-center md:absolute md:-top-24 ">
					<img src={mockUps} className="relative w-full -top-24  md:top-32 md:left-32"></img>
				</div>
				<div className="px-4 pt-0 pb-12 flex flex-col  items-center md:items-start md:w-[38%] md:ml-16 md:px-0">
					<h1 className="text-center text-4xl text-darkBlue pb-6 font-sans md:text-start md:text-6xl md:pb-9"> Next generation digital banking</h1>
					<p className="text-center text-grayishBlue text-sm px-3 mb-9 md:text-start md:text-xl md:px-0">
						{' '}
						Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
					</p>
					<RequestButton />
				</div>
			</section>
		</>
	);
}

export default Hero;
