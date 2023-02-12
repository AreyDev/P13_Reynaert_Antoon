import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../features/auth/authSlice'

function Signin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )
    useEffect(() => {
        if (isError) {
          alert(message)
        }
    
        if (isSuccess || user) {
          navigate('/user')
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])
    
    function handleSignin(e) {
        e.preventDefault()

        const userData = {
          email: username,
          password,
        }
        console.log (userData)
        dispatch(login(userData))
    }
    return (       <main className="main bg-dark">
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon" />
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Email</label><input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" placeholder="Enter your username"/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label><input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Enter your password"/>
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
        </div>
        {/* PLACEHOLDER DUE TO STATIC SITE */}
        <button className="sign-in-button" onClick={handleSignin}>Sign In</button>
        {/* SHOULD BE THE BUTTON BELOW */}
        {/* <button class="sign-in-button">Sign In</button> */}
        {/*  */}
      </form>
    </section>
  </main> );
}

export default Signin;