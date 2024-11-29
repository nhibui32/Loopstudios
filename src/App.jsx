import imageInteractive from './images/desktop/image-interactive.jpg'
import deepEarth from './images/desktop/image-deep-earth.jpg'
import nightArcade from  './images/desktop/image-night-arcade.jpg'
import soccerTeamVr from './images/desktop/image-soccer-team.jpg'
import theGrid from './images/desktop/image-grid.jpg'
import fromUpAboveVr from './images/desktop/image-from-above.jpg'
import pocketBorealis from './images/desktop/image-pocket-borealis.jpg'
import theCuriosity from './images/desktop/image-curiosity.jpg'
import makeItFisheye from './images/desktop/image-fisheye.jpg'
import facebookIcon from './images/icon-facebook.svg'
import twitterIcon from './images/icon-twitter.svg'
import pinterestIcon  from './images/icon-pinterest.svg'
import instagramIcon from './images/icon-instagram.svg'
import copyrightIcon from './images/copyright.svg'



export default function App() {
  return (
    <>
      <div className="bg-cover-image bg-cover bg-center h-[800px] object-cover pt-[100px] px-[150px] text-white">
        <div className="flex justify-between">
          <div>
            <p className="font-bold text-4xl">loopstudios</p>
          </div>
          <div className="flex gap-6 text-2xl">
            <p className="hover:underline">About</p>
            <p className="hover:underline">Careers</p>
            <p className="hover:underline">Events</p>
            <p className="hover:underline">Products</p>
            <p className="hover:underline">Support</p>
          </div>
        </div>
        <div>
          <p className="uppercase text-7xl border w-[700px] mt-[200px] p-10 font-thin">Immersive Experiences That Deliver</p>
        </div>
      </div>

      <div className="wrap w-5/6 mx-auto px-[100px] py-[200px]">
        <div className="grid grid-cols-5 ">
          <div className="row-span-full col-start-1 col-span-4 self-center">
            <img src={imageInteractive} alt="Image InterActive" className="w-full h-auto" />
          </div>
          <div className="row-span-full col-span-2 col-end-6 self-end p-[50px] text-black bg-white">
            <p className='uppercase text-5xl mb-6'>the leader in interactive vr</p>
            <p className='text-2xl text-gray-500'>Founded in 2011, Loopstuidos has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed business through digital experiences that bind to their brand.</p>
          </div>
        </div>
        
        <div className='flex justify-between pt-[200px] pb-[100px]'>
          <p className='uppercase text-5xl'>Our Creations</p>
          
          <button className='uppercase text-2xl border-2 border-black px-10 hover:bg-black hover:text-white'>See all</button>
        </div>

        <div className='grid grid-cols-4 gap-10 justify-between'>
          <div className='relative max-w-xs overflow-hidden'>
            <img src={deepEarth} alt="" className='w-full h-full '/>
            <p className='absolute inset-0 flex items-end text-white text-4xl p-10 uppercase font-thin'>Deep Earth</p>
          </div>

          <div className='relative max-w-xs overflow-hidden'>
            <img src={nightArcade} alt="Night Arcade" className='w-full h-full '/>
            <p className='absolute inset-0 flex items-end text-white text-4xl p-10 uppercase font-thin'>Deep Earth</p>
          </div>

          <div className='relative max-w-xs overflow-hidden'>
            <img src={soccerTeamVr} alt=" soccer team vr " className='w-full h-full'/>
            <p className='absolute inset-0 flex items-end text-white text-4xl p-10 uppercase font-thin'>soccer team vr</p>
          </div>  

          <div className='relative max-w-xs overflow-hidden'>
            <img src={theGrid} alt="the grid" className='w-full h-full'/>
            <p className='absolute inset-0 flex items-end text-white text-4xl p-10 uppercase font-thin'>the grid</p>
          </div>  

          <div className='relative max-w-xs overflow-hidden'>
            <img src={fromUpAboveVr} alt=" from up above vr" className='w-full h-full'/>
            <p className='absolute inset-0 flex items-end text-white text-4xl p-10 uppercase font-thin'>from up above vr</p>
          </div>  

          <div className='relative max-w-xs overflow-hidden'>
            <img src={pocketBorealis} alt="pocket borealis" className='w-full h-full'/>
            <p className='absolute inset-0 flex items-end text-white text-4xl p-10 uppercase font-thin'>pocket borealis</p>
          </div>  

          <div className='relative max-w-xs overflow-hidden'>
            <img src={theCuriosity} alt=" the curiosity" className='w-full h-full'/>
            <p className='absolute inset-0 flex items-end text-white text-4xl p-10 uppercase font-thin'>the curiosity</p>
          </div>  

          <div className='relative max-w-xs overflow-hidden'>
            <img src={makeItFisheye} alt="make it fisheye" className='w-full h-full'/>
            <p className='absolute inset-0 flex items-end text-white text-4xl p-10 uppercase font-thin'>make it fisheye</p>
          </div>  
        </div>
      </div>

      <div className='w-full bg-black h-[200px] text-white text-2xl px-[100px] py-[50px]'>

        <div className='flex justify-between items-center'>
          <p>loopstudios</p>
          <div className='flex gap-6'>
            <img src={facebookIcon} alt="Facebook Icon" />
            <img src={twitterIcon} alt="Twitter Icon" />
            <img src={pinterestIcon} alt="Pinterest Icon" />
            <img src={instagramIcon} alt="Instagram Icon" />
          </div>
        </div>

        <div className='flex justify-between pt-5'>
          <div className="flex gap-6 text-xl">
              <p className="hover:underline">About</p>
              <p className="hover:underline">Careers</p>
              <p className="hover:underline">Events</p>
              <p className="hover:underline">Products</p>
              <p className="hover:underline">Support</p>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <img src={copyrightIcon} alt="" className='h-[24px] w-[24px]'/>
            <p className='text-gray-500'>2021 Loopstudios. All rights reserved</p>
          </div>
        </div>

      </div>
    </>
  )
}