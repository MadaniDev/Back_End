import { useState } from 'react';
import {Form, Button, Container, Row, Col, Card} from 'react-bootstrap';
const Home = () => {
    const [Keyword, setKeyword] = useState('')
const [Movies, setMovies] = useState([])
    const fetchHandler = () => {
        fetch(`http://www.omdbapi.com/?apikey=c7047997&s=${Keyword}`)
        .then((response) => response.json())
        .then((data) => setMovies(data.Search));
    }

  return (
    <div>
        <Form.Label htmlFor="inputPassword5">Movie Search</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button onClick={fetchHandler} type='button' variant="primary">Fetch</Button>{' '}
    <Container>
        <Row>
        {Movies.map(movie => (
            <Col sm={3}>
                <Card style={{ width: '10rem' }}>
                    <Card.Img variant="top" src={movie.Poster} />
                    <Card.Body>
                        <Card.Title>{movie.Title}</Card.Title>
                            <Card.Text>
                            {movie.Year}
                            </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        ))}
        </Row>
    </Container>
    </div>
  )
}

export default Home