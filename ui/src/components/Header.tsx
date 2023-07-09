import { Container, Navbar } from "react-bootstrap";

type TProps = {
  content: string;
};

const navbarStyles: React.CSSProperties = {
  backgroundColor: "lightblue",
};

const Header: React.FC<TProps> = ({ content }) => {
  return (
    <Navbar data-bs-theme="light" style={navbarStyles}>
      <Container>
        <Navbar.Brand href="#home">{content}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
