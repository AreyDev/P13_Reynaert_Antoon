import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProfile, reset, updateProfile} from '../features/profile/profileSlice'

function User() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [updateform, setUpdateform] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { profile, isLoading, isError, message } = useSelector(
        (state) => state.profile
    )

    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        if (!user) {
            navigate('/signin');
            return
        }

        dispatch(getProfile())

        return () => {
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])

    if (isLoading) {
        return <div>Loading...</div>
    }
    function handleSave(e) {
        e.preventDefault()

        dispatch(updateProfile({ firstName: firstname, lastName: lastname}))
        setFirstname('')
        setLastname('')
    }

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back <br />{user && profile && <span>{profile.firstName + ' ' + profile.lastName}</span>}!</h1>
                <button className="edit-button" onClick={() => setUpdateform(true)}>Edit Name</button>
                {updateform ?
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="firstname">Firstname</label><input value={firstname} onChange={(e) => setFirstname(e.target.value)} type="text" id="firstname" placeholder="Enter your firstname" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastname">Lastname</label><input value={lastname} onChange={(e) => setLastname(e.target.value)} type="text" id="lastname" placeholder="Enter your lastname" />
                    </div>
                    <button className="save-button" onClick={handleSave}>Save</button>
                    <button className="cancel-button" onClick={() => setUpdateform(false)}>Cancel</button>
                </form>
                : null
                }
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    );
}


export default User;