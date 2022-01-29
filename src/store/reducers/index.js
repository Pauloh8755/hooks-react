
const reducer = (state,action)=>{
    switch(action.type){
        case 'numberAdd2': 
            return {...state, number: state.number + 2}
        case 'login':
            return {...state, user: {name: action.payload} }
        case 'numberMult7':
            return {...state, number: state.number * 7}
        case 'numberDiv25' :
            return {...state, number: state.number / 25}
        case 'numberParseInt' : 
            return {...state, number: parseInt(state.number)}
        case 'numberAddN' : 
            return {...state, number: state.number - action.playload}
        default:
            return state
    }
    
}

export default reducer