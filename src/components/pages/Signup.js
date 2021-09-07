import Illustration from "../Illustration";
import Form from "../Form";
import TextInput from './../TextInput';
import Checkbox from "../Checkbox";
import Button from "../Button";

function Signup() {
    return (
        <div>
            <h1>Create an account</h1>
            <div className='column'>
                <Illustration />
                <Form>
                    <TextInput
                        icon="person"
                        type="text"
                        placeholder="Enter name"
                    />
                    <TextInput
                        icon="alternate_email"
                        type="email"
                        placeholder="Enter email"
                    />
                    <TextInput
                        icon="lock"
                        type="password"
                        placeholder="Enter password"
                    />
                    <TextInput
                        icon="lock_clock"
                        type="email"
                        placeholder="Confirm password"
                    />
                    <Checkbox
                        text="I agree to the Terms &amp; Conditions"
                    />
                    <Button text="submit now" />
                    <div className="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                        </div>                    
                </Form>
            </div>
        </div>
    )
}

export default Signup;