export const depositeMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "DEPOSITE",
            payload: amount
        })
    }
}


export const withDrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "WITH-DRAW",
            payload: amount
        })
    }
}