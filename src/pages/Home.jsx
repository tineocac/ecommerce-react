import { useSelector } from 'react-redux';
import '../assets/css/Home.css'
import { useNavigate } from 'react-router-dom';
import { Button, InputGroup, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {

    const navigate = useNavigate()
    const products = useSelector(state => state.products)
    const [categories, setCategories] = useState([]);
    const [newFiltered, setNewFiltered] = useState([]);
    const [textInput, setTexInput] = useState ('');

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
        const filtered = products.filter( product => product.title.toLowerCase().includes(textInput.toLowerCase()))
        setNewFiltered(filtered)
    }

    console.log(products);
    return (
        <div className='route-home'>
            <h1>This is my Home component</h1>
            {
                categories?.map(category =>
                (
                    <Button key={category.id} onClick={() => filterCategory(category.id)}>{category.name}</Button>
                )
                )
            }

            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="type name product here" value={textInput} onChange={ e => setTexInput( e.target.value)}
                />
                <Button variant="outline-secondary" onClick={search}>
                    Search
                </Button>
            </InputGroup>
            <ul className='products-container'>{
                newFiltered.map(product => (
                    <li key={product.id} onClick={() => navigate(`/product/${product.id}`)} className='product-container'>
                        <h3 className='product-title'>{product.title}</h3>
                        <img className='img-fluid' src={product.productImgs} alt="product-img" />
                    </li>
                ))
            }</ul>
        </div>
    );
};

export default Home;