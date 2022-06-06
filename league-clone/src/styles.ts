import styled from 'styled-components';
let logo = require('./images/background_lol.jpg')

type ImageType = {
  background: boolean
}
type ButtonTypes = {
  isActive: boolean
}

export const Container = styled.div`
  width: 5vw;
  height: 65vh;
  display: flex;
  background-color: white;
  @media(max-width: 1657px) {
    width: 5vw;
    height: 65vh;
    display: flex;
    background-color: white;
  }
`
export const ImageContainer = styled.div`
  width: 50%;
  height: 50%;
`;
export const Image = styled.div`
  width: 1360px;
  height: 938px;
  margin-left: 20em;
  @media(max-width: 1657px) {
    margin-left: 15em;
    width: 1137px;
    height: 775px;
  }
  background: url("${(props:ImageType) => props.background ? logo : ''}") no-repeat;
`
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12rem;
  margin-right: -10rem;
  margin-bottom: -10rem;
  img {
    width: 220px;
    height: 220px;
  }
  input {
    padding: 10px;
    opacity: 0.6;
    border: 0.5 solid transparent;
  }
  p {
    font-size: 40px;
    font-family: monospace;
    font-weight: 900;
    margin-bottom: 20px;
  }
  small {
    font-size: 22px;
    font-family: monospace;
  }
  label {
    font-size: 1.5em;
    font-family: monospace, arial;
  }
  input[type="checkbox"] {
    margin-top: -20px;
    margin-left: 11rem;
    width: 40px;
    height: 15px;
    border: 0.5 solid black;
  }
  input[type="checkbox"]:checked {
    background-color: black;
  }

  @media(max-width: 1657px) {
    display: flex;
    flex-direction: column;
    margin-left: 12rem;
    margin-right: -9rem;
    margin-bottom: -10rem;
    input[type="checkbox"] {
      margin-top: -20px;
      margin-left: 11rem;
      width: 40px;
      height: 15px;
      border: 0.5 solid black;
    }
    input[type="checkbox"]:checked {
      background-color: black;
    }
  }
`
export const LoginButton = styled.button`
  padding: 10px;
  background: ${(props: ButtonTypes) => props.isActive ? 'palevioletred' : 'white'};
  margin: 2rem 0 0 0.5rem;
  font-size: 1.5rem;
  cursor: ${(props: ButtonTypes) => props.isActive ? 'pointer': 'not-allowed'};
  opacity: ${(props: ButtonTypes) => props.isActive ? '' : '0.6'};
  border: ${(props: ButtonTypes) => props.isActive ? 'none' : '2px solid palevioletred'};
`;