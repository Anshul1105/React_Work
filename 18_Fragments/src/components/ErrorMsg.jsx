const ErrorMsg = ({items}) => {


    return <>{items.length === 0 && <h3>Enter some items in the list.</h3>}</>;
    

};

export default ErrorMsg;