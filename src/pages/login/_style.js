import styled from "styled-components";
export const MainContainer = styled.div`
     display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`
export const ImagePart = styled.div`
    margin-right: 30px;
    width: 414px;
    height: 618px;
    background-image: url("https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png");
    background-size: cover;
    .photo-ctn{
        position: relative;
        .photo{
            position: absolute;
            top: 98px;
            left: 150px;
            width: 242px;
            transition: ease-in-out 1s;
        }
    }
`


const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 348px;
    height: 358px;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    .login-logo{
        height: 51px;
        width: 175px;
        background-size: 420px 411px;
        background-position: 0 -129px;
        background-image: url("https://www.instagram.com/static/bundles/es6/sprite_core_2x_bcd90c1d4868.png/bcd90c1d4868.png");
    }

    .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .login-button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 30px;
        background-color: #0095f6;
        border-radius: 3px;
        color: white;
        font-weight: 500;
        margin-top: 20px;
    } 
    .face-book{
        display: flex;
        align-items: center;
        justify-content: center;
        .face-book-logo{
            margin-right: 8px;
            width: 16px;
            height: 16px;
            background-size: 440px 411px;
            background-image: url("https://www.instagram.com/static/bundles/es6/sprite_core_2x_bcd90c1d4868.png/bcd90c1d4868.png");
            background-position: -347px -329px;

        }
        .face-book-text{
            color: #385185;
            font-size: 14px;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
            font: inherit;
            font-weight: 600;
        }
    }
    .forgot-password{
        color: #00376b;
        color: rgba(var(--fe0,0,55,107),1);
        font-size: 12px;
        line-height: 14px;
        margin-top: 12px;
        text-align: center;
        font-weight: 500;
    }

`
export default LoginContainer;

export const LineSectionStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 35px;
    margin-bottom: 6px;
    .line {
        width:43%;
        height: 1px;
        background-color: rgba(var(--b38,219,219,219),1);
    }
    .line-text {
        color: rgba(var(--f52,142,142,142),1);
        font-weight: 600;
        font-size: 16px;
    }
`

export const BottomPart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    width: 348px;
    height: 63px;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    .question{
        font-size: 14px;
        color: #262626;
    }
    .signup{
        color: #0095f6;
        font-weight: 600;
        font-size: 14px;
        margin-left: 3px;
    }
`

