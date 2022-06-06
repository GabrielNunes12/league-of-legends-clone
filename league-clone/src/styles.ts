import styled from 'styled-components';
let logo = require('./images/background_lol.jpg')

type ImageType = {
  background: boolean
}
type ButtonTypes = {
  isActive: boolean
}

export const Container = styled.div`
  width: 98vw;
  height: 95vh;
  display: flex;
  background-color: white;
  @media(max-width: 1024px) {
    width: 50%;
    height: 50%;
    background-color: white;
  }
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const Image = styled.div`
  width: 1500px;
  height: 900px;
  margin-left: 32em;
  @media(max-width: 1024px) {
    margin-left: 1.5em;
    width: 750px;
    height: 750px;
  }
  background: url("${(props:ImageType) => props.background ? logo : ''}") no-repeat;
`
export const LoginWrapper = styled.div`
  input {
    justify-content: space-around;
    padding: 10px;
  }
  p {
    font-size: 32px;
    font-family: monospace;
    margin-bottom: 20px;
  }
  small {
    font-size: 22px;
    font-family: monospace;
  }
`
export const LoginButton = styled.button`
  padding: 10px;
  justify-content: center;
  background: ${(props: ButtonTypes) => props.isActive ? 'palevioletred' : 'white'};
  font-color: 'palevioletred';
  font-size: 1em;
  cursor: ${(props: ButtonTypes) => props.isActive ? 'pointer': 'not-allowed'};
  opacity: ${(props: ButtonTypes) => props.isActive ? '' : '0.6'};
  border: ${(props: ButtonTypes) => props.isActive ? 'none' : '2px solid palevioletred'};
`;