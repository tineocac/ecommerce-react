import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = ({ login }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);



    const submit = (data) => {
        // console.log(data);
        axios
            .post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data)
            .then(res => {
                // console.log(res.data);
                // alert('Succes')
                localStorage.setItem('token', res.data.data.token)
                navigate('/')
                handleClose()
                clear()
                handleShow2()
                 




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
            <Button variant="primary" onClick={handleShow}>
                Login
            </Button>

            <Modal show={show} onHide={handleClose}>
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

            <Modal show={show2} onHide={handleClose2} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Successful login <i className="fa-regular fa-square-check"></i></Modal.Title>
                </Modal.Header>
                <Modal.Body>Enjoy your shopping</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        handleClose2()
                        login(true)
                        }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Login;