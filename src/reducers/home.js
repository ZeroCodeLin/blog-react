const defaultState = [];
const example =(state = defaultState, action)=>{
    switch (action.type){
        case "essayList":
            return state +1
            break;
        case "subtract":
            return state-1;
            break;
        default:
            return state;
    }
}

export default example;