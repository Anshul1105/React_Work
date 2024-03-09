import TodoItems from "./TodoItems";
import React from "react";

const AllItems = ({ itemObj }) => {

    return (
        <div className="item_container">
            {itemObj.map((item) => (
                <TodoItems task={item.work} date={item.due}></TodoItems>
            ))}

            <TodoItems task="Study Traffic" date="01/02/2024"></TodoItems>
            <TodoItems task="Practice DSA on Leetcode" date="01/02/2024"></TodoItems>
            <TodoItems task="Lecture on React" date="01/02/2024"></TodoItems>
        </div>
    )
};

export default AllItems

// return (
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