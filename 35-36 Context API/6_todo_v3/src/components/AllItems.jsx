import { TodoItemsContext } from "../store/toto-items-store";
import TodoItems from "./TodoItems";
import React, { useContext } from "react";

const AllItems = ({ onDeleteClick }) => {

    const MytodoItems = useContext(TodoItemsContext);

    console.log(MytodoItems);

    return ( //1
        <div className="item_container">
            {MytodoItems.map((item) =>
                <TodoItems
                    task={item.task}
                    date={item.date}
                    onDeleteClick={onDeleteClick}>
                </TodoItems>
            )}

        </div>
    )
};

export default AllItems

// return (// 2
//     <div className="item_container">

//         {/* this piece of code is now working this is supposed to accept the task and date dynamically */}
//         {/* {itemObj.map((item) => (
//             <TodoItems task={item.task} date={item.date}></TodoItems>))} */}

//         <TodoItems task="Study Traffic" date="01/02/2024"></TodoItems>
//         <TodoItems task="Practice DSA on Leetcode" date="01/02/2024"></TodoItems>
//         <TodoItems task="Lecture on React" date="01/02/2024"></TodoItems>
//         {/* <TodoItems task={itemObj.task} date={itemObj.date}></TodoItems> */}
//         {/* {itemObj && <TodoItems task={itemObj.task} date={itemObj.date} />} */}
//       </div>
//     )