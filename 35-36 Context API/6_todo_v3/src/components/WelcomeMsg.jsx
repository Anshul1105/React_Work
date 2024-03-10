import { useContext } from "react";
import { TodoItemsContext } from "../store/toto-items-store";

const WelcomeMsg = () => {

    const { todoItems } = useContext(TodoItemsContext);

    return todoItems.length === 0 && <p><b>Enjoy your day</b></p>
};

export default WelcomeMsg;