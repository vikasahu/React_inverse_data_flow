import React, { Component } from 'react'

 const UserInput = (props) => {

  const style = {
    textAlign: 'center',
    padding:'5px',
    boxShadow: '3px 2px #eee',
    fontSize: 'inherit',
    marginTop: '15px',
    margin: "auto",
    display: "block"
};

return(<input style={style} type='text' onChange = {props.x}/>)

}

export default UserInput
