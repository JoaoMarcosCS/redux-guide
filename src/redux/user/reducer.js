//Reducer do usuário

const initialState = {
    currentUser: 10,
}

//esse reducer vai escutar as actions do usuario

const userReducer = (state = initialState, aciton) => {
    if(aciton.type === "user/login"){
        return {...state, currentUser: aciton.payload}
    }
}

export default userReducer;