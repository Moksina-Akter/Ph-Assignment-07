import bgImg from '../assets/vector1.png'

const Banner = () => {
    return (
        <div className=''>
                <div className='flex justify-between w-11/12 mx-auto gap-6 my-14 '>
            <div className='rounded-lg bg-gradient-to-r from-[#632ee3] to-[#9f62f2]'>
                <div className="flex justify-between">
                <img src={bgImg} alt=""  className=''/>
                 <div className=" flex flex-col justify-center items-center">
                    <h1 className='text-2xl font-normal text-white'>In-Progress</h1>
                    <p className='text-5xl font-semibold text-white'>0</p>
                </div>
                <img src={bgImg} alt=""  className='rotate-y-180'/>
                </div>
                
            </div>
            <div className='rounded-lg bg-gradient-to-r from-[#54cf68] to-[#00827a]'>
               <div className="flex justify-between">
                <img src={bgImg} alt=""  className=''/>
                <div className=" flex flex-col justify-center items-center ">
                    <h1 className='text-2xl font-normal text-white'>Resolved</h1>
                    <p className=' text-5xl font-semibold text-white'>0</p>
                </div>
                <img src={bgImg} alt=""  className='rotate-y-180'/>
                </div>
                
            </div>
        </div>

        </div>
      
    );
};

export default Banner;