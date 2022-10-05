import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Alerts from './Alerts';

const Login = ({  showLogin, handleCloseLogin }) => {

    const [showSucces, setShowSucces] = useState(false);
    const handleCloseSucces = () => setShowSucces(false);
    const handleShowSucces = () => setShowSucces(true);

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const submit = (data) => {

        axios
            .post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data)
            .then(res => {
                localStorage.setItem('token', res.data.data.token)
                navigate('/')
                handleCloseLogin()
                clear()
                handleShowSucces()
                
            })
            .catch(error => {
                if (error.response.status === 404) {
                    alert('wrong credentials')
                }
                console.log(error.response)
            })


    }

    const clear = () => {
        reset({
            email: '',
            password: ''
        })
    }

    return (
        <>
            <Modal show={showLogin} onHide={handleCloseLogin}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"  {...register('email')} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" {...register('password')} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit(submit)} >
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
            <Alerts showSucces={showSucces} handleCloseSucces={handleCloseSucces} />
        </>
    );
};

export default Login;