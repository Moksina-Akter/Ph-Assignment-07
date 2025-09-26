import { use, useState } from "react";
import Banner from "./Banner";
import Card from "./Card";
import { toast, ToastContainer } from 'react-toastify';


const IssueManagement = ({ fetchPromise }) => {
    const initialData = use(fetchPromise);

    const [count, setCount] = useState(0);
    const [task, setTask] = useState([]);

    const handleClick = (getCard) => {
        setCount((count) => count + 1);
        setTask((card) => [...card, getCard]);
        toast('✅ In Progress!')
    }


    return (
        <div className="bg-[#f5f5f5] ">
            <Banner count={count} />

            <h1 className="font-semibold text-2xl md:w-11/12 p-3 mx-auto">Customer Tickets</h1>

            <div className="grid md:grid-cols-8 w-11/12 mx-auto">
                <div className="grid md:grid-cols-2 col-span-6 gap-5 ">
                    {
                        initialData.map((issue) =>
                            < Card issue={issue} key={issue.id} handleClick={handleClick} />
                        )
                    }
                </div>
                <div className="md:col-span-2 p-5">
                    <div className="pb-4">
                        <h1 className="font-semibold text-2xl">Task Status</h1>
                        {task.length === 0 ? (
                            <p className="text-[#76767c]">Select a ticket to add to Task Status</p>
                        ) : (
                            task.map((task) => (
                                <div key={task.id} className="p-4 bg-white rounded shadow my-2">
                                    <h3 className="font-semibold pb-3">{task.title}</h3>
                                    <button className="w-full text-white bg-green-600 rounded-md px-3 py-1">
                                        Complete
                                    </button>
                                </div>
                            ))
                        )}

                    </div>

                </div>
                <div>
                    <h1 className="font-semibold text-2xl  ">Resolved Task</h1>
                    <p className=" text-[#76767c]"> No resolved task yet.</p>
                </div>
            </div>
      <ToastContainer/>
        </div>
    );
};

export default IssueManagement;