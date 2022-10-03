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

    // console.log(newFiltered[0]?.productImgs
    //     );

    return (
        <Row>
            <Col  lg={3}>
                {/* <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}
                <ListGroup>
                    <ListGroup.Item action onClick={() => setNewFiltered(products)}>
                        All categories
                    </ListGroup.Item>
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

                                <div className='container-product'
                                    style={{ backgroundImage: `url(${product.productImgs[0]})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', }}

                                >
                                </div>


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