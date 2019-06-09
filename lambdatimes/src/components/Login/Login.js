import React from "react";
import styled from 'styled-components';
// import './Login.css';

const LoginBox = styled.div`
    font-family: 'PT Sans';
    font-style: normal;
    background-color: #d3d3d3;
    border: 1px solid white;
    width: 40%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    padding-bottom: 30px;
    -webkit-box-shadow: 0 8px 6px -6px black;
       -moz-box-shadow: 0 8px 6px -6px black;
            box-shadow: 0 8px 6px -6px black;
    input {
      width: 80%;
      margin: 20px;
      height: 30px;
      border: none;
      font-size: 1.2rem;
      color: #333333;
      text-align: center;      
    }

    input:focus {
      outline: none;  
    }    

    button {
      background-color: #1bb05d;
      border: 1px solid #1bb05d;
      color: white;
      font-weight: bold;
      font-size: 1.5rem;
      padding-top: 10px;
      padding-bottom: 10px;
      width: 40%;
      border-radius: 5px;      
        &:hover {
        border: 1px solid white;
        transition: ease-in-out, width .35s ease-in-out;
        width: 50%;   
        outline: none;  
      }          
    }

    h2 {
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  }

`;  


class Login extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        userNameValue: "",
        passWordValue: "",
      }
    }

    inputChange = (value, inputField) => {
        this.setState(state => ({
            [inputField]: value
        }));
      }; 

    onUserNameChange = event => {
        this.inputChange(event.target.value, 'userNameValue');
    }
  
    onPasswordChange = event => {
        this.inputChange(event.target.value, 'passWordValue');
    }

    storeUsername = () =>{
        localStorage.setItem('username', this.state.userNameValue);
        window.location.reload();
    }

    render () {
    return (
        <LoginBox>
        <h2>Please login</h2>
        <label>User name</label>
        <input
          type="text"
          value={this.props.userNameValue}
          onChange={this.onUserNameChange}
        />

        <label>Password</label>
        <input
          type="password"
          value={this.props.passWordValue}
          onChange={this.onPasswordChange}
        />
        <button
        onClick={this.storeUsername}
        >Login</button>
      </LoginBox>
    );
    }
  
  }

  export default Login;