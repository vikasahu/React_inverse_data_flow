import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from "react"
import './UserOutput.css';



class UserOutput extends React.Component{
constructor(props){
    super(props)
}
render(){

    return(
        <div className='UserOutput'>
    <p>UserOutput Component</p>
    <p>This Name is {this.props.name}</p>
    </div>
    )
}

}

export default UserOutput


