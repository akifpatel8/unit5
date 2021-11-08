function reducerFn(state,{type,payload}){
    switch(type){
        case "ADD":return {...state,count:state.count+payload}
    }
}

const initailState={
    count:0
}

class Store{
    constructor(reducerFn,initailState){
        this.reducer=reducerFn
        this.state=initailState
    }
    getState(){
       return this.state
    }
    dispatch(action){
        this.state=this.reducer(this.state,action)
    }
}
const store=new Store(reducerFn,initailState)

console.log(store.getState());
store.dispatch({type:"ADD",payload:1})
store.dispatch({type:"ADD",payload:1})
store.dispatch({type:"ADD",payload:-1})

console.log(store.getState());
