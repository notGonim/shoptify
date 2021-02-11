import React, { useState } from 'react'
import { auth } from '../../../firebase'
import './login.scss'

export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = e => {
        e.preventDefault()
    }
    const register = e => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
            }).catch(err => console.log(err.message))
    }

    return (
        <div className="login">
            <p className="logo">Shoptify</p>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form >
                    <h5>E-mail</h5>
                    <input type="text" value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password}
                        onChange={e => setPassword(e.target.value)} />
                    <button className="btn_signIn" type="submit"
                        onClick={signIn}>Sign In</button>
                    <p>By continuing, you agree to Shoptify's Conditions of Use
                         and Privacy Notice.</p>
                    <button className="btn_signUp"
                        type="submit" onClick={register}>Create your Shoptify Account</button>
                </form>
            </div>
        </div>
    )
}
