import React from 'react'
import hoobank from '../assets/hoobank.png'
import redcur from '../assets/redcurrant.png'
import design from '../assets/graph.png'
import vision from '../assets/vision.png'

const Works = () => {
  return (
		<div className='max-w-[1200px] mx-auto p-5' id='works'>
			<div className='pb-4'>
				<p className='text-4xl md:text-5xl mb-2 font-extrabold text-[#905dff]'>
					Works
				</p>
				<p className='text-white'>Check out some of my recent work</p>
			</div>
			<div className='grid sm:grid-cols-2 gap-4'>
				<div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center bg-cover relative'>
					<img src={hoobank} alt='work1' />
					<div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
						<span className='text-xl font-bold text-white tracking-wider'>
							Responsive Modern Bank
						</span>
						<div className=''>
							<a href='https://github.com/JAJUMIESE/Modern-Bank-App-ReactJS-TailwindCSS'>
								<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
									GitHub
								</button>
							</a>
						</div>
					</div>
				</div>
				<div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center bg-cover relative'>
					<img src={redcur} alt='work2' />
					<div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
						<span className='text-xl font-bold text-white tracking-wider'>
							Parallax Landing
						</span>
						<div className=''>
							<a href='https://github.com/JAJUMIESE/Modern-Bank-App-ReactJS-TailwindCSS'>
								<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
									GitHub
								</button>
							</a>
						</div>
					</div>
				</div>
				<div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center bg-cover relative'>
					<img src={vision} alt='work3' />
					<div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
						<span className='text-xl font-bold text-white tracking-wider'>
							Vision Creo
						</span>
						<div className=''>
							<a href='https://www.behance.net/gallery/198161795/VISION-CREO'>
								<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
									Behance
								</button>
							</a>
						</div>
					</div>
				</div>
				<div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center bg-cover relative'>
					<img src={design} alt='work4' />
					<div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
						<span className='text-xl font-bold text-white tracking-wider'>
							Graph & UI/UX Design
						</span>
						<div className=''>
							<a href='https://www.behance.net/gallery/185122745/Portfolio-Graphic-Designer'>
								<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
									Behance
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Works