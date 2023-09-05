import React, { useContext, useEffect, useState } from 'react';
import { SignUpWrapper } from './styles';
import { Input } from '@mui/material';
import { AppContext } from '../../../App';
import { useNavigate } from 'react-router-dom';


const emptyUserData = {
    name: '',
    email: '',
    password: '',

}

const LoginPage = () => {
    const navigate = useNavigate()
    const nameInputRef = React.useRef(null)
    const [signUpData, setSignUpData] = useState(emptyUserData)

    const { authorizeUser } = useContext(AppContext)

    const handleChageValue = (
        fieldName: keyof typeof emptyUserData,
        event: React.ChangeEvent<HTMLInputElement> | any,
    ) => {
        setSignUpData((prevData) => {
            return { ...prevData, [fieldName]: event.target.value }
        })
    }

    const handleSignUp = () => {
        if (signUpData.name && signUpData.email && signUpData.password) {
            authorizeUser({
                name: signUpData.name,
                email: signUpData.email,
                id: Math.random() * 1000000 + ' ',
            })
        }
        navigate('/')

    }

    return (
        <div>

            <SignUpWrapper>
                <p>Sign UP</p>
                <Input
                    type='text'
                    placeholder='Enter Name'
                    value={signUpData.name}
                    onChange={(event) => handleChageValue('name', event)}
                    ref={nameInputRef}
                />
                <Input
                    type='email'
                    placeholder='Enter Email'
                    value={signUpData.email}
                    onChange={(event) => handleChageValue('email', event)}

                />
                <Input
                    type='password'
                    placeholder='Enter Password'
                    value={signUpData.password}
                    onChange={(event) => handleChageValue('password', event)}
                />
                <button onClick={handleSignUp}>Sign Up</button>
            </SignUpWrapper>
        </div>
    );
};

export default LoginPage;