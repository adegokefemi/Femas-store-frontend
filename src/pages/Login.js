import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";

// Full screen component width, Height is 100vw.
const Container = styled.div`
    width: 100vw;
    height: 50vw;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5), 
        rgba(255, 255, 255, 0.5)
    ), 
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
        width: 25%;
        padding: 20px;
        background-color: white;
        ${mobile({width:"75%"})}
`
const Title = styled.h1`
        font-size: 24px;
        font-weight: 300;
        margin: 5px 0px;
`
// only two input so need for flex-wrap
const Form = styled.form`
        display: flex;
        flex-direction: column;
`
const Input = styled.input`
        flex: 1;
        min-width: 40%;
        margin: 10px 0px;
        padding: 10px;

    `

const Button = styled.button`
        width: 40%;
        padding: 15px 20px;
        border: none;
        background-color: teal;
        color: white;
        cursor: pointer;
        margin-bottom: 10px;
        margin-top: 10px;
        &:disabled{
          color: green;
          cursor: not-allowed;
        }
`
const Link = styled.a`
         margin: 5px 0px;
         font-size: 12px;
         text-decoration: underline;
         cursor: pointer;
`
const Error = styled.span`
        color: red;
`


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick= (e) => {
    e.preventDefault();
    // We call the Api login from redux here because i will send dispatch and user i.e username and password.
    login(dispatch, { username, password})
  }
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <Button onClick={handleClick} disabled={isFetching}>Login</Button>
                {error &&  <Error>Something went wrong...</Error>}
                <Link>FORGOT PASSWORD</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
