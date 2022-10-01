import { useSelector } from 'react-redux';
import '../assets/css/Home.css'
import { useNavigate } from 'react-router-dom';
import { Button, InputGroup, Form, Row, Col, ListGroup, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {

    const navigate = useNavigate()
    const products = useSelector(state => state.products)
    const [categories, setCategories] = useState([]);
    const [newFiltered, setNewFiltered] = useState([]);
    const [textInput, setTexInput] = useState('');

    useEffect(() => {
        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
            .then(res => setCategories(res.data.data.categories))
    }, [])

    useEffect(() => {
        setNewFiltered(products)
    }, [products])

    const filterCategory = (categoryId) => {
        const filtered = products.filter(newFilter => newFilter.category.id === categoryId)
        setNewFiltered(filtered)
    }

    const search = (categoryId) => {
        const filtered = products.filter(product => product.title.toLowerCase().includes(textInput.toLowerCase()))
        setNewFiltered(filtered)
    }

    return (
        <Row>
            <Col lg={3}>
                <ListGroup>
                    {
                        categories?.map(category =>

                        (
                            <ListGroup.Item action key={category.id} onClick={() => filterCategory(category.id)}>
                                {category.name}
                            </ListGroup.Item>
                        )
                        )
                    }
                </ListGroup>

            </Col>

            <Col>
                <h1>This is my Home component</h1>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="type name product here" value={textInput} onChange={e => setTexInput(e.target.value)}
                    />
                    <Button variant="outline-secondary" onClick={search}>
                        Search
                    </Button>
                </InputGroup>
                <Row xs={1} md={2} xl={3} className="g-4">
                    {newFiltered.map(product => (
                        <Col key={product.id}>
                            <Card onClick={() => navigate(`/product/${product.id}`)} style={{ height: '100%', cursor: 'pointer' }}>
                                <Card.Img variant="top" style={{ width: '150px' }} src={product.productImgs} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    );
};

export default Home;