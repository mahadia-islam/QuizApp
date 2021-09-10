import Illustration from './../Illustration';
import image from './../../asset/image/login.svg';
import Form from './../Form';
import TextInput from '../TextInput';
import Button from '../Button';
import { useAuth } from './../../context/AuthContext';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const history = useHistory();

    async function handleLogin(event) {
        event.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(email, password);
            history.push('/');
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError('Failed to Login');
        }
    }

    return (
        <div>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration image={image} />
                <Form className='login' onSubmit={handleLogin}>
                    <TextInput
                        icon="alternative_email"
                        type="text"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required
                    />
                    <TextInput
                        icon="lock"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required
                    />
                    <Button>
                        <span>Login Now</span>
                    </Button>
                    {error && <p>{ error }</p>}
                    <div className="info">
                        Don't have an account? <a href="/signup">Signup</a> instead.
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login;