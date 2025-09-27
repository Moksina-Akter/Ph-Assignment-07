import { use, useState } from "react";
import Banner from "./Banner";
import Card from "./Card";
import { toast, ToastContainer } from 'react-toastify';


const IssueManagement = ({ fetchPromise }) => {
    const initialData = use(fetchPromise);

    const [count, setCount] = useState(0);
    const [task, setTask] = useState([]);

    const [resolved, setResolved] = useState(0);
    const [resolvedTask, setResolvedTask] = useState([]);

    const handleClick = (getCard) => {
        setCount(count + 1);
        setTask((card) => [...card, getCard]);
        toast.success(' In Progress !')
    }


    const handleComplete = (taskDone) => {
        setResolvedTask((card2) => [...card2, taskDone]);
        setResolved(resolved + 1);
        setCount(count - 1);
        setTask((work) => work.filter((kaj) => kaj.id !== taskDone.id));

        toast.success(' Completed !')

    }

    return (
        <div className="bg-[#f5f5f5] ">
            <Banner count={count} resolved={resolved} />

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
                    <div className=" pb-4">
                        <h1 className="font-semibold text-2xl">Task Status</h1>
                        {task.length === 0 ? (
                            <p className="text-[#76767c]">Select a ticket to add to Task Status</p>
                        ) : (
                            task.map((task) => (
                                <div key={task.id} className="p-4 bg-white rounded shadow my-2">
                                    <h3 className="font-semibold pb-3">{task.title}</h3>
                                    <button onClick={() => handleComplete(task)} className="w-full text-white bg-green-600 rounded-md px-3 py-1">
                                        Complete
                                    </button>
                                </div>
                            ))
                        )}

                    </div>
                    <div>
                        <h1 className="font-semibold text-2xl  ">Resolved Task</h1>
                        {resolvedTask.length === 0 ? <p className=" text-[#76767c]"> No resolved task yet.</p> : resolvedTask.map((work) => (
                            <div key={work.id} className="p-4 bg-gray-200 rounded shadow my-2">
                                <h3 className="font-semibold pb-3">{work.title}</h3>
                                <div className="flex justify-between">
                                    <button className=" text-green-600 px-3 py-1">
                                        <span className="text-green-600">✅</span> Complete
                                    </button>
                                    <p className=" text-[#76767c]">Click to remove</p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default IssueManagement;