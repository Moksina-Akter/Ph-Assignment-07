import bgImg from '../assets/vector1.png'

const Banner = ({count}) => {
    return (
        <div className=''>
            <div className='md:flex justify-between md:w-11/12 mx-auto gap-6 pt-10 mb-14 '>
                <div className='rounded-lg bg-gradient-to-r from-[#632ee3] to-[#9f62f2]'>
                    <div className="flex justify-between mb-6">
                        <img src={bgImg} alt="" className='w-32 h-60 md:w-full md:h-full' />
                        <div className=" flex flex-col justify-center items-center flex-1">
                            <h1 className='text-2xl font-normal text-white'>In-Progress</h1>
                            <p className='text-5xl font-semibold text-white'>{count}</p>
                        </div>
                        <img src={bgImg} alt="" className='rotate-y-180 md:w-full md:h-full w-32 h-60' />
                    </div>

                </div>
                <div className='rounded-lg bg-gradient-to-r from-[#54cf68] to-[#00827a]'>
                    <div className="flex justify-between">
                        <img src={bgImg} alt="" className='md:w-full md:h-full w-32 h-60' />
                        <div className=" flex flex-col justify-center items-center flex-1">
                            <h1 className='text-2xl font-normal text-white'>Resolved</h1>
                            <p className=' text-5xl font-semibold text-white'>0</p>
                        </div>
                        <img src={bgImg} alt="w-12 h-12" className='rotate-y-180 md:w-full md:h-full w-32 h-60' />
                    </div>

                </div>
            </div>

        </div>

    );
};

export default Banner;