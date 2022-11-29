import { useSelector } from 'react-redux';
import '../assets/css/Home.css'
import { useNavigate } from 'react-router-dom';
import { Button, InputGroup, Form, Row, Col, ListGroup, Card, Dropdown, Carousel } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BlackFriday from '../assets/images/BlackFriday.png'
import homeImg from '../assets/images/homeImg.png'
import days from '../assets/images/days.png'

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

    const search = () => {
        const filtered = products.filter(product => product.title.toLowerCase().includes(textInput.toLowerCase()))
        setNewFiltered(filtered)
        setTexInput('')

    }

    const autoSearch = () => {
        const filtered = products.filter(product => product.title.toLowerCase().includes(textInput.toLowerCase()))
        setNewFiltered(filtered)
    }

    // filter de o -500
    const filterByPrice1 = () => {

        const filter = products.filter(product => Number(product.price) <= 499.00)
        setNewFiltered(filter)
    }
    const filterByPrice2 = () => {

        const filter = products.filter(product => Number(product.price) <= 1000.00 && Number(product.price) >= 500)
        setNewFiltered(filter)
    }
    const filterByPrice3 = () => {

        const filter = products.filter(product => Number(product.price) <= 1600.00 && Number(product.price) >= 1000)
        setNewFiltered(filter)
    }
    return (
        <Row>
            <Col xs={12}>
                <Carousel  className='carousel-home_container'>
                    <Carousel.Item className='carousel-home' style={{ backgroundImage: `url(${homeImg})` }}>
                    </Carousel.Item>

                    <Carousel.Item className='carousel-home' style={{ backgroundImage: `url(${BlackFriday})` }}>
                    </Carousel.Item>

                    <Carousel.Item className='carousel-home' style={{ backgroundImage: `url(${days})` }}>
                    </Carousel.Item>

                </Carousel>
            </Col>
            <Col lg={1} className='dropdown-position'>
                <Dropdown>
                    <Dropdown.Toggle>
                        Categories
                    </Dropdown.Toggle>

                    <Dropdown.Menu onClick={() => window.scrollTo(0, 300)}>
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
                <Dropdown className='mt-3' style={{ width: "3rem" }}>
                    <Dropdown.Toggle>
                        Prices
                    </Dropdown.Toggle>

                    <Dropdown.Menu onClick={() => window.scrollTo(0, 0)}>
                        <Dropdown.Item onClick={filterByPrice1} action>
                            $0 - $500
                        </Dropdown.Item>
                        <Dropdown.Item onClick={filterByPrice2} action>
                            $500 - $1000
                        </Dropdown.Item>
                        <Dropdown.Item style={{ cursor: "pointer" }} onClick={filterByPrice3} action>
                            $1000 - $1500
                        </Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
            </Col>

            <Col>
                <InputGroup className="mb-3">
                    <Form className='input-search_container' onSubmit={search} onKeyDown={autoSearch}>
                        <Form.Control
                            placeholder="type name product here" value={textInput} onChange={e => setTexInput(e.target.value)}
                        />
                        <Button type='submit'>
                            Search
                        </Button>
                    </Form>


                </InputGroup>
                <Row xs={1} md={2} xl={3} className="g-4">
                    {newFiltered.map(product => (
                        <Col className='container-card' key={product.id}>
                            <Card onClick={() => {
                                navigate(`/product/${product.id}`)
                                scrollTo(0, 0)

                            }} style={{ height: '100%', cursor: 'pointer' }}>

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

                                        Price:  ${product.price}
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