import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Search: React.FC = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form>
            <Row>
              <Col xs={9}>
                <Form.Control placeholder="Search for images" />
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
