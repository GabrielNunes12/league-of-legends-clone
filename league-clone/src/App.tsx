import { useState } from 'react';
import { Container, Image, ImageContainer, LoginWrapper, LoginButton} from './styles';

function App() {
  const [userName, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [signedIn, setSignedIn] = useState<boolean>(false);

  const handleStaySignedIn = () => {
    setSignedIn(!signedIn);
  }
  return (
    <div className="App">
      <Container>
        <LoginWrapper>
          <p>Sign in</p>
          <small>Username:</small>
          <input type="text" placeholder='Type your username' onChange={(event) => setUsername(event.target.value)}/>
          <small>Password:</small>
          <input type="password" placeholder='Type your password' onChange={(event) => setPassword(event.target.value)}/>
          <label htmlFor="staySignedIn">Stay signed in</label>
          <input type="checkbox" name="staySignedIn" id="staySignedIn" checked={signedIn} onChange={handleStaySignedIn}/>
          {userName && password !== '' ? <LoginButton isActive={true}>Login</LoginButton> : <LoginButton isActive={false}>Login</LoginButton>}
        </LoginWrapper>
        <ImageContainer>
          <Image background={true}/>
        </ImageContainer>
      </Container>
    </div>
  );
}

export default App;
