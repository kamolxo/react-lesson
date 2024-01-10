

import React from 'react'
import { connect } from 'react-redux'

const App = (props) => {

 const setname=()=>{
props.setname('Kamol')
 }

  return (
    <div>
         <h1>{props.username}</h1>
         <button onClick={setname}>changename</button>
    </div>
  )
}


function mapStateToProps(state){
return{
  username:state.Reducer.name
}
}


function mapDispatchToProps(dispatch){
  return{
   setname:(name)=>{
    dispatch({
      type:'setname',
      payload:name
    })
   }
  }
}




const a = connect(mapStateToProps, mapDispatchToProps)
export default a(App)


