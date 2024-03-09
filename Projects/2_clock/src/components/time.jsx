let ClockTime = () =>{
    let time = new Date();

    return <h3>{time.toLocaleDateString()} - {time.toLocaleTimeString()}</h3>
    
};

export default ClockTime; 