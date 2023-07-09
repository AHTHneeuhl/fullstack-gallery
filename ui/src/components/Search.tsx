import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Search: React.FC = () => {
  const [word, setWord] = useState("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    console.log(word);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form onSubmit={handleSearch}>
            <Row>
              <Col xs={9}>
                <Form.Control
                  type="text"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                  placeholder="Search for images"
                />
              </Col>
              <Col>
                <Button color="primary" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
