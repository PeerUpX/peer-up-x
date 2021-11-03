import styled from 'styled-components'
import {useState} from "react"

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px;
  padding: 20px 80px 20px 80px;
  border-style: solid;
  border-radius: 4px;
  color: grey;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  border-radius: 4px;
  color: rgb(60, 66, 87);
`;

const Submit = styled.button`
  padding:5px 15px; 
  background:#ccc; 
  border:0 none;
  cursor:pointer;
  border-radius: 5px; 
  margin-top: 10px;
  margin-bottom: 10px;
`
function SupporterLogin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    console.log(username);
    console.log(password);
  }
  
  return (
    <Container>
      <ColumnContainer>
        <h1>Supporter Login</h1>
        <p>Username</p>
        <Input type="text" value={username} onChange = {(e)=>setUsername(e.target.value)}/>
        <p>Password</p>
        <Input type="password" value = {password} onChange = {(e)=>setPassword(e.target.value)}/>
        <Submit onClick={onSubmit}>Login</Submit>
      </ColumnContainer>
    </Container>  
  );
}

export default SupporterLogin;
