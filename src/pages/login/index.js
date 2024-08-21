import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/Instagram_logo.png';
import loginScreen from '../../assets/img/instaScreen1.png';
import loginScreen1 from '../../assets/img/instaScreen2.png';
import loginScreen2 from '../../assets/img/instaScreen3.png';
import loginScreen3 from '../../assets/img/instaScreen4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import app from '../../assets/img/app.png';
import app2 from '../../assets/img/app2.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useActionData, useNavigate, useSubmit } from 'react-router-dom';


const Login = () => {
    const actions = useActionData();
    const submit = useSubmit();
    console.log(actions);
    const navigate = useNavigate();
    const [type, setType] = useState('password');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        if (actions?.data?.access_token) {
            sessionStorage.setItem('userInfo', JSON.stringify(actions?.data));
            navigate('/login');
        }
    }, [actions]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        if (!password || !email) {
           return alert('Fill all the Information');
        }
        submit({ email, password }, {
            method: 'post'
        });
    };

    const handleEye = () => {
        if (type === "password") {
            setType('text');
        } else {
            setType('password');
        }
    }
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-5 loginImg'>
                    <div className='screens'>
                        <div className='Screen1'>
                            <img src={loginScreen} alt="" />
                        </div>
                        <div className='Screen2'>
                            <img src={loginScreen1} alt="" />
                        </div>
                        <div className='Screen3'>
                            <img src={loginScreen2} alt="" />
                        </div>
                        <div className='Screen1'>
                            <img src={loginScreen3} alt="" />
                        </div>
                    </div>
                </div>
                <div className='col-5 marginT_50'>
                    <div className='loginBox'>
                        <div className='row justify-content-center'>
                            <img src={logo} alt="" />
                        </div>
                        <div className='form' >
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                                <div className='position-relative'>
                                    <Form.Control
                                        required
                                        type={type}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                    />
                                    <span onClick={handleEye}>{type === 'password' ? 'Show' : 'Hide'} </span>
                                </div>
                                <Button type="submit"> Log in</Button>
                            </Form>
                        </div>
                        <div className='or'>
                            <span>OR</span>
                        </div>
                        <div className='text-center facebook'>
                            <a href="/">
                                <FontAwesomeIcon icon={faFacebook} />
                                Log in with Facebook
                            </a>
                        </div>
                        <div className='text-center'>
                            <span>Forget Password ?</span>
                        </div>
                    </div>
                    <div className='loginBoxFoot text-center'>
                        <span>Don't have an account <a href="#">Sign up</a></span>
                    </div>
                    <div className='text-center'>
                        <span>Get the app</span>
                    </div>
                    <div className='row app justify-content-center '>
                        <img src={app2} alt="" />
                        <img src={app} alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Login;
