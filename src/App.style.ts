import styled, { createGlobalStyle } from 'styled-components';
import image from "./images/bgimage.jpg";
export const GlobalStyle = createGlobalStyle`
html{
    height : 100%;
}

body{
    background-image : url(${image});
    background-size : cover;
    margin : 0;
    padding : 0 20px;
    display : flex;
    justify-content : center;
}
*{
    box-sizing: border-box;
    font-family
}
`;

export const Wrapper = styled.div`
display: flex;
flex-direction : column;
align-items : center;

>p {
    color : #fff;
}

.score{
    color: #fff;
    font-size : 2rem;
    margin : 0;
}

h1{
    font-family : fasinate Inline
    background-image : linear-gradient(180deg, #fff, #87f1ff );
    background-size : 100%;
    background-clip : text;
    --webkit-backgroung-clip : text;
    --webkit-text-fill-color : transparent;
    --moz-backgroung-clip: text;
    --moz-text-fill-color : transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size : 70px;
    font-weight : 400;
    text-align : center;
    margin: 20px;
    
}


`;




