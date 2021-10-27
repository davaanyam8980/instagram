import React from 'react'
import { HomePageContainer } from './_style'


const Messenger = (props) => {
    const { width, height } = props;
    return (
        <svg
            width={height || "22"}
            height={width || "22"}
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M 36.2 16.7 L 29 22.2 c -0.5 0.4 -1.2 0.4 -1.7 0 l -5.4 -4 c -1.6 -1.2 -3.9 -0.8 -5 0.9 l -6.8 10.7 c -0.7 1 0.6 2.2 1.6 1.5 l 7.3 -5.5 c 0.5 -0.4 1.2 -0.4 1.7 0 l 5.4 4 c 1.6 1.2 3.9 0.8 5 -0.9 l 6.8 -10.7 c 0.6 -1.1 -0.7 -2.2 -1.7 -1.5 Z M 24 1 C 11 1 1 10.5 1 23.3 C 1 30 3.7 35.8 8.2 39.8 c 0.4 0.3 0.6 0.8 0.6 1.3 l 0.2 4.1 c 0 1 0.9 1.8 1.8 1.8 c 0.2 0 0.5 0 0.7 -0.2 l 4.6 -2 c 0.2 -0.1 0.5 -0.2 0.7 -0.2 c 0.2 0 0.3 0 0.5 0.1 c 2.1 0.6 4.3 0.9 6.7 0.9 c 13 0 23 -9.5 23 -22.3 S 37 1 24 1 Z m 0 41.6 c -2 0 -4 -0.3 -5.9 -0.8 c -0.4 -0.1 -0.8 -0.2 -1.3 -0.2 c -0.7 0 -1.3 0.1 -2 0.4 l -3 1.3 V 41 c 0 -1.3 -0.6 -2.5 -1.6 -3.4 C 6.2 34 4 28.9 4 23.3 C 4 12.3 12.6 4 24 4 s 20 8.3 20 19.3 s -8.6 19.3 -20 19.3 Z"
            />
        </svg>
    )
}

// header 
// time line 
// rigth side 

const HomePage = () => {
    return (
        <HomePageContainer>
            <h1>hello</h1>
            <div>
                <Messenger></Messenger>
            </div>
        </HomePageContainer>
    )
}

export default HomePage;