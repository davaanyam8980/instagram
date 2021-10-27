import { MainContainer } from "./_style.js";
import LoginContainer, { LineSectionStyle, BottomPart, ImagePart } from "./_style.js";
import { LoginInput } from '../../components/input.js'
import { Form } from 'reactstrap';
import React, { useState, useEffect } from "react";

const LoginPage = () => {
    const [zurag, setZurag] = useState(img[0].image);
    console.log(img[0].image)

    const timeout = setTimeout(() => {
        for (let i = 0; i < img.length; i++) {
            console.log(img[i])
            return (
                setZurag(img[i].image)
            )
        }
    }, 2000);

    return (
        <MainContainer>
            <ImagePart>
                <div className="photo-ctn">
                    <img src={zurag} className='photo' ></img>
                </div>
            </ImagePart>
            <div>
                <LoginContainer>
                    <Form className='login-form'>
                        <div className="login-logo" ></div>
                        <LoginInput Label="Phone number,username,or email" type="email"></LoginInput>
                        <LoginInput Label="password" type="password"></LoginInput>
                        <div className="login-button">Login</div>
                        <LineSectionStyle>
                            <div className="line"></div>
                            <span className="line-text">or</span>
                            <div className="line"></div>
                        </LineSectionStyle>
                        <div className="face-book">
                            <div className="face-book-logo"></div>
                            <span className="face-book-text">Log in with Facebook</span>
                        </div>
                        <span className="forgot-password">Forgot password?</span>
                    </Form>
                </LoginContainer>
                <BottomPart>
                    <span className='question'>Don't have an account?</span>
                    <span className='signup'>Sign up</span>
                </BottomPart>
            </div>
        </MainContainer>
    );
}
export default LoginPage;

const img = [
    { image: "https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg" },
    { image: "https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg" },
    { image: "https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg" },
    { image: "https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg" },
]


