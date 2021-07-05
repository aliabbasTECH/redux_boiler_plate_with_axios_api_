

const INITIAL_STATE={
    data:{

    }
};

const AppReducer =(state = INITIAL_STATE,action)=>{
    console.log("this is reduser Action===>",action.data)
    switch (action.type){
        case "GETDATA":
            return{
                ...state,
                data:action.data
            }
            default:
                return state
    }
    
}

export default AppReducer;
