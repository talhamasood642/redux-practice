const Amountreducer = (state = null  , action) => {
          if(action.type === "DEPOSITE"){
            return state + action.payload
          }
          else  if(action.type === "WITH-DRAW"){
            return state - action.payload
          }

          else{
            return state
          }
}

export default Amountreducer