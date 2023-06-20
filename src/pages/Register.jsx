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
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  outline-color: #833b17;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #833b17;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" required />
          <Input placeholder="last name" required />
          <Input placeholder="username" required />
          <Input placeholder="email" required />
          <Input placeholder="password" type="password" required />
          <Input placeholder="confirm password" type="password" required />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
