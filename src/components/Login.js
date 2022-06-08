import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Login.css';
import firebase from '../../src/Firebase'

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res=>{
            alert('Login Berhasil !');
                this.props.history.push('/dashboard');
        })
        .catch(error=>{
            alert(error.message)
        })
    }

    render() {
        const { email, password } = this.state
        return (
            <div>
                <h1 class="judullog">Login Admin</h1>
                <form class="formlog"onSubmit={this.handleSubmit}>
                    <div className="imgcontainer">
                        <h2><b>Laundry Kita</b></h2>
                    </div>
                    <div className="containerlog">
                        <label><b>Email</b></label>
                        <input class="inputlog" type="text" placeholder="Enter Email" name="email" value={email} onChange={this.handleChange} required />
                        <label><b>Password</b></label>
                        <input class="inputpass" type="password" placeholder="Enter Password" name="password" value={password} onChange={this.handleChange} required />
                        <button class="buttonlog" type="submit">Login</button>
                    </div>
                    <div className="containerlog" style={{ backgroundColor: '#f1f1f1' }}>
                        {/* <button type="button" className="containerlog"><Link to="/registrasi">Belum Punya Akun?</Link></button> */}
                        {/* <p class="buttonlog"><Link to="/registrasi">Belum Punya Akun?</Link></p> */}
                        <p>Belum punya akun? <Link to="/registrasi">Silahkan Registrasi</Link></p>
                    </div>
                </form>
            </div>
        );
    }

}
export default Login; 