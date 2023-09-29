import React from 'react'
const NavBar = () => {
    return (
			<nav className="w-full h-fit p-5 border-2 border-t-0 border-l-0 border-r-0 border-b-slate-200 flex justify-center">
				<main className="w-11/12 flex items-center justify-between">
					<span className="flex gap-3 items-center font-inter">
						<a href="/" className="flex gap-3 items-center ">
							<img src="logo1.png" alt="logoo"  className=' w-10'/>
							<p className="text-dark_blue font-semibold text-base w-4">
								HelpMeOut
							</p>
						</a>
					</span>

					<div className="hidden font-work_sans font-medium text-black sm:flex sm:gap-10">
						<a href="#features">Features</a>
						<a href="#works">How It Works</a>
					</div>

					<a
						href="/login"
						className="font-sora text-dark_blue font-semibold "
					>
						Get Started
					</a>
				</main>
			</nav>
		);
}

export default NavBar;