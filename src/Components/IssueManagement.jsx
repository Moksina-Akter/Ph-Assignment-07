import { use } from "react";
import Banner from "./Banner";
import Card from "./Card";


const IssueManagement = ({ fetchPromise }) => {

    const initialData = use(fetchPromise);
    


    return (
        <div className="bg-[#f5f5f5] ">
            <Banner />
            <h1 className="font-bold text-2xl w-11/12 p-3 mx-auto">Customer Tickets</h1>

            <div className="grid grid-cols-8 w-11/12 mx-auto">
                <div className="grid grid-cols-2 col-span-6 gap-5 ">
                    {
                        initialData.map((issue) => < Card issue={issue} key={issue.id} />
                        )
                    }
                </div>

                <div className="col-span-2 ">
                    <h1 className="font-bold text-2xl p-3 ">Task Status</h1>
                    <p>Select a ticket to add to Task Status</p>
                </div>
            </div>


        </div>
    );
};

export default IssueManagement;