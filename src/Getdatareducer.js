const Getdatareducer = (state=[],action)=>{
    if (action.type === "GET_DATA"){
        return action.payload
        
    }
    else{
        return state
    }


}
export default Getdatareducer