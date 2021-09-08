import Illustration from './../Illustration';
import image from './../../asset/image/login.svg';
import Form from './../Form';
import TextInput from '../TextInput';
import Button from '../Button';

function Login() {
    return (
        <div>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration image={image} />
                <Form className='login'>
                    <TextInput
                        icon="alternative_email"
                        type="text"
                        placeholder="Enter email"
                    />
                    <TextInput
                        icon="lock"
                        type="password"
                        placeholder="Enter password"
                    />
                    <Button text="login now" />
                    <div className="info">
                        Don't have an account? <a href="/signup">Signup</a> instead.
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login;