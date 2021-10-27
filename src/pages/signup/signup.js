import { MainContainer } from "./_style.js";
import SignUpContainer, { LineSectionStyle, } from "./_style.js";
import { LoginInput } from '../../components/input.js'
import { Form } from 'reactstrap';
import React, { useState, useEffect } from "react";

const SignUp = () => {


    return (
        <MainContainer>
            <div>
                <SignUpContainer>
                    <Form className='login-form'>
                        <div className="login-logo" ></div>
                        <LoginInput Label="Phone number,username,or email" type="email"></LoginInput>
                        <LoginInput Label="Full Name"></LoginInput>
                        <LoginInput Label="Last Name"></LoginInput>
                        <LoginInput Label="password" type="password"></LoginInput>
                        <div className="login-button">Sign Up</div>
                    </Form>
                </SignUpContainer>
            </div>
        </MainContainer>
    );
}
export default SignUp;




