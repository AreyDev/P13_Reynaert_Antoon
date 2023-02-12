import Logo from '../assets/img/argentBankLogo.png'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {reset} from '../features/profile/profileSlice'

function Nav() {
    const { profile } = useSelector(
        (state) => state.profile
    )
    const { user } = useSelector(
        (state) => state.auth
    )
    const onLogout = () => {
        dispatch(reset())
        navigate('/')
      }


    return (<nav className="main-nav">
        <Link to="/" className="main-nav-logo">
            <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
            {
            profile && user ?
                    <div>
                        <span>{profile.firstName + ' ' + profile.lastName}</span>
                    <Link className="main-nav-item" onClick={onLogout}>
                        <i className="fa fa-user-circle" />
                        signout
                    </Link> 
                    </div>:
                    <Link className="main-nav-item" to="/signin">
                        <i className="fa fa-user-circle" />
                        Sign In
                    </Link>
            }
        </div>
    </nav>);
}

export default Nav;