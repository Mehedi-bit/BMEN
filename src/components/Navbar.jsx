import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined";
import { mobile, pc } from "../responsive";
import { tablet } from "../responsive";

const Container = styled.div`
  height: 60px;
  color: black;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0" })}
  ${tablet({ padding: "10px 10px" })}
`;

const Left = styled.div`
  flex: 1;
  margin-top: 0;
  padding-bottom: 0;
`;

const Logo = styled.p`
  font-weight: bold;
  font-size: 35px;
  margin: 0 0 0 10%;
  ${mobile({ fontSize: "24px" })}
  ${tablet({ fontSize: "25px" })}
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
  /* width: 40%;
  justify-content: space-between; */

  &:hover {
    border: 0.5px solid chocolate;
    transition: all 0.5s ease;
  }
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: 400px;
  ${mobile({ width: "50px" })}
  ${tablet({ width: "120px" })}
  ${pc({ width: "180px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: 2, paddingRight: "12px" })}
  ${tablet({ justifyContent: "flex-end", flex: 2, paddingRight: "12px" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  background-color: #f2f0f0;
  padding: 2px 5px;
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "11px", marginLeft: "10px" })}
  ${tablet({ fontSize: "12px", marginLeft: "10px" })}
  ${pc({ fontSize: "12px", marginLeft: "12px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>BMEN.</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon
              style={{
                color: "black",
                fontSize: 16,
                cursor: "pointer",
              }}
            />
          </SearchContainer>
        </Center>
        <Right>
          <Language>EN</Language>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="primary">
              <ShoppingCart />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
