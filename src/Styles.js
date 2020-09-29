import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  Body {
    background-color: #fafafa;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }
`

export const Title = styled.h1`
font-weight: 200;
font-size: 38px;
color: #4c4e61;
text-align: center;
`

export const Text = styled.p`
margin: -20px auto;
margin-bottom: 50px;
color: #a3a5ae;
text-align: center;
`

export const Wrapper = styled.div`
width: 80%;
margin: 40px auto 20px;
display: -ms-grid;
display: grid;
grid-template: ". team ." "superv team calc" "superv karma calc" ". karma .";
gap: 20px;
`;

export const Component = styled.div`
background-color: white;
width: 360px;
height: 285px;
border-radius: 8px;
padding: 25px;
-webkit-box-sizing: border-box;
box-sizing: border-box;
-webkit-box-shadow: 3px 3px 5px 6px #ccc;
box-shadow: 3px 3px 5px 6px #ccc;

.green{
  grid-area: superv;
  border-top: 5px solid #45d3d3;
}

p{
  font-size: 15px;
  color: #a3a5ae;
}

h2{
  color: #4c4e61;
  font-size: 22px;
}

h4{
  text-align: right;
  margin-top: 50px;
}
`;
