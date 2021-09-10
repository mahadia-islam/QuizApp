import { Link } from 'react-router-dom';
import accountClasses from './../styles/Account.module.css';
import { useAuth } from './../context/AuthContext';

function Account() {

    const { currentUser,logout } = useAuth();
    

    return (
        <div className={accountClasses.account}>
            {currentUser ? (
                <>
                    <span className="material-icons-outlined" title="Account">
                    account_circle
                    </span>
                    <span>{currentUser.displayName}</span>
                    <span className="material-icons-outlined" title="Logout" onClick={logout}> logout </span>
                </>
            ) : (
                <>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </>
            )}
        </div>
    )
}

export default Account;