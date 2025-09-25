
import img from '../assets/ri_calendar-line.png';

const Card = ({issue}) => {
    return (
        <div className="space-y-3 shadow-lg rounded-md cursor-pointer mb-5 bg-slate-100 p-4">
            <div className="flex justify-between items-center">
                <h1 className='font-bold text-xl'> {issue.title}</h1>
                <button>open</button>
            </div>
            <p className='text-[#76767c]'>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
            <div className='flex justify-between it'>
                <div className="flex gap-2 justify-between items-center">
                    <span>#1001 </span>
                    <span>HIGH PRIORITY</span>
                </div>
                <div className="flex justify-between gap-2 items-center">
                    <span>John Smith</span>
                    <img src={img} alt="" />
                    <span>1/17/2024</span>
                </div>
            </div>
        </div>

    );
};

export default Card;

