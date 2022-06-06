import { useState } from 'react';
import { Container, Image, ImageContainer, LoginWrapper, LoginButton} from './styles';

function App() {
  const [userName, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <div className="App">
      <Container>
        <LoginWrapper>
          <small>Username:</small>
          <input type="text" placeholder='Type your username' onChange={(event) => setUsername(event.target.value)}/>
          <small>Password:</small>
          <input type="password" placeholder='Type your password' onChange={(event) => setPassword(event.target.value)}/>
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
