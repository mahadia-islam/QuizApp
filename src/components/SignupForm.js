import TextInput from './TextInput';
import Checkbox from "./Checkbox";
import Button from "./Button";
import Form from './Form';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from './../context/AuthContext';

function SignupForm() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { signup } = useAuth();
    const history = useHistory();

    async function handleSubmit(event) {
        event.preventDefault();

        // do validation
        if (password !== confirmPassword) {
            return setError("password don't matched");
        }
        if (agree === true) {
            return setError('please sign our agreement')
        }

        try {
            setError('');
            setLoading(true);
            await signup(email, password, username);
            history.push('/');
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError('Failed to Sign up');
        }

    }

    return (
        <Form className='signup' onSubmit={handleSubmit}>
            <TextInput
                icon="person"
                type="text"
                placeholder="Enter name"
                value={username}
                required
                onChange={(e) => {
                    setUsername(e.target.value)
                }}
            />
            <TextInput
                icon="alternate_email"
                type="email"
                placeholder="Enter email"
                value={email}
                required
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
            />
            <TextInput
                icon="lock"
                type="password"
                placeholder="Enter password"
                value={password}
                required
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
            />
            <TextInput
                icon="lock_clock"
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                required
                onChange={(e) => {
                    setConfirmPassword(e.target.value)
                }}
            />
            <Checkbox
                text="I agree to the Terms &amp; Conditions"
                value={agree}
                onChange={(e) => {
                    setAgree(e.target.value);
                }}
            />
            <Button disabled={loading} type="submit">
                <span>Signup Now</span>
            </Button>
            {error && <p className="error">{ error }</p>}
            <div className="info">
                Already have an account? <a href="login.html">Login</a> instead.
            </div>                    
        </Form>
        
    )
}

export default SignupForm;