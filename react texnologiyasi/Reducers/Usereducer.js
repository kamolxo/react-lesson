





export function Reducer(state={
    name:'Laziz',
    count:0
},action){
    switch(action.type){
        case 'setname':
            state={...state,name:action.payload}
    }
    return state
}


