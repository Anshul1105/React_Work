function Hello(){
    let myName = "Strider";
    let fullName =()=>{
        return 'Anshul Soni';
    }
    return <h3>
        This is a hello component, written by {myName} aka {fullName()};
    </h3>
}
export default Hello;