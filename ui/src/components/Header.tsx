import { Container, Navbar } from "react-bootstrap";

type TProps = {
  content: string;
};

const Header: React.FC<TProps> = ({ content }) => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">{content}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
