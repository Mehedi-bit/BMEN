import styled from "styled-components";
import horsebg from "../assets/horsebg.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(190, 185, 183, 0.5), rgba(121, 79, 52, 0.5)),
    url(${horsebg}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #833b17;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-size: 14px;
  outline-color: #833b17;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #833b17;
  color: white;
  cursor: pointer;
  margin: 20px 0px;
`;

const Link = styled.a`
  margin-bottom: 7px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOG IN</Title>
        <Form>
          <Input placeholder="username" required />
          <Input placeholder="password" type="password" required />
          <Button>LOGIN</Button>
          <Link>Don&apos;t you remember the password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
