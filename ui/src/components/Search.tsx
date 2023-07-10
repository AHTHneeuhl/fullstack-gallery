import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const unsplashApiKey = process.env.REACT_APP_UNSPLASH_API_KEY;
const unsplashApiUrl = process.env.REACT_APP_UNSPLASH_API_URL;

const Search: React.FC = () => {
  const [word, setWord] = useState("");

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const res = await fetch(
        `${unsplashApiUrl}/photos/random?query=${word}&client_id=${unsplashApiKey}`
      );
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
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
