import { useSelector } from 'react-redux';
import '../assets/css/Home.css'
import { useNavigate } from 'react-router-dom';
import { Button, InputGroup, Form, Row, Col, ListGroup, Card, Dropdown } from 'react-bootstrap';
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
            <Col lg={1} className='dropdown-position'>
                <Dropdown>
                    <Dropdown.Toggle>
                        Categories
                    </Dropdown.Toggle>

                    <Dropdown.Menu onClick={() => window.scrollTo(0, 0)}>
                        <Dropdown.Item action onClick={() => setNewFiltered(products)}>
                            All categories
                        </Dropdown.Item>
                        {
                            categories?.map(category =>

                            (
                                <Dropdown.Item action key={category.id} onClick={() => filterCategory(category.id)}>
                                    {category.name}
                                </Dropdown.Item>
                            )
                            )
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </Col>

            <Col>
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
                        <Col className='container-card' key={product.id}>
                            <Card onClick={() => navigate(`/product/${product.id}`)} style={{ height: '100%', cursor: 'pointer' }}>

                                <div className='container-product'
                                    style={{ backgroundImage: `url(${product.productImgs[0]})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', }}

                                >
                                </div>
                                <div className='add-cart'>
                                    <i className="fa-solid fa-cart-plus"></i>
                                </div>

                                <Card.Body>

                                    <small className='card-title'>{product.title}</small>


                                    <strong>

                                        ${product.price}
                                    </strong>
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