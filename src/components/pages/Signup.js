import Illustration from "../Illustration";
import image from './../../asset/image/signup.svg';
import SignupForm from "../SignupForm";

function Signup() {
    return (
        <div>
            <h1>Create an account</h1>
            <div className='column'>
                <Illustration image={image}/>
                <SignupForm/>
            </div>
        </div>
    )
}

export default Signup;