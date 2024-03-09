function Random(){
    let number= Math.random()*10;

    return <h4 style={{'backgroundColor':"brown"}}> Random number is : {Math.round(number)} </h4>

}
 export default Random;