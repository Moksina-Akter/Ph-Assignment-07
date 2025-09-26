
import img from '../assets/ri_calendar-line.png';

const Card = ({issue, handleClick}) => {

    return (
        <div onClick={()=>handleClick(issue)} className="space-y-3 shadow-lg rounded-md cursor-pointer mb-5 bg-slate-100 p-4">
            <div className="flex justify-between items-center">
                <h1 className='font-semibold text-xl'> {issue.title}</h1>
               <div className="p-1 ">
                 <div className={`rounded-2xl flex items-center gap-1 px-3 py-1  ${issue.status === 'Open' ? 'bg-green-200 text-green-900' : 'bg-yellow-200 text-yellow-700' }`}>
                    <div className={` h-4 w-4 rounded-full ${issue.status === 'Open' ? 'text-green-900 bg-green-700 ' : 'bg-yellow-400 text-yellow-700' }`}></div>
                    <button className=''>{issue.status}</button>
                 </div>
               </div>
            </div>
            <p className='text-[#76767c]'>{issue.description}</p>
            <div className='flex justify-between it'>
                <div className="flex gap-3 justify-between items-center">
                    <span className='font-normal text-[#76767c]'>#{issue.id} </span>
                    <span className={` font-semibold ${issue.priority === 'HIGH PRIORITY' ? 'text-red-500' : issue.priority === 'MEDIUM PRIORITY' ? 'text-yellow-500' : 'text-green-800'}`}>{issue.priority}</span>
                </div>
                <div className="flex text-[#76767c] justify-between gap-3 items-center">
                    <span>{issue.customer}</span>
                    <img src={img} alt="" />
                    <span>{issue.createdAt}</span>
                </div>
            </div>
        </div>

    );
};

export default Card;

