import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
const AdminLogin = () => {
    return (
        <>
            <LoginContainer>
                <LoginInnerContainer>
                    <Link className="nav-link" to='/' >
                        <img src={logo} />
                    </Link>
                    <input className="form-control" type="text" placeholder="Username" />
                    <input className="form-control my-2" type="password" placeholder="Password" />
                    <button>Login</button>
                </LoginInnerContainer>
            </LoginContainer>
        </>
    )
}

export default AdminLogin;

const LoginContainer = styled.div`
background-color: #f8f8f8;
display: grid;
height: 100vh;
place-items: center;
`;
const LoginInnerContainer = styled.div`
padding:50px;
text-align: center;
background-color: #fff;
border-radius:10px;
box-shadow:0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
display: flex;
flex-direction: column;

>a{
   >img{
    object-fit: contain;
    height: 100px;
    border-radius: 10px;
    box-shadow:0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding:10px 15px;
    margin-bottom: 40px;;
   }
}
>button{
    margin-top: 50px;
    text-transform: inherit ;
    background-color:#0a8d48;
    color: #FFF;
    border: none;
    border-radius:25px;
    padding:10px 40px;
    :hover{
    background-color:rgba(10,141,72,0.8);
    }
}
`;