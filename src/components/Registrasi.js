import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Registrasi.css';
import firebase from '../../src/Firebase'

class Registrasi extends Component {

    state = {
        email: '',
        password: ''
    }
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res=>{
            alert('Registrasi Berhasil !');
                this.props.history.push('/login');
        })
        .catch(error=>{
            alert(error.message)
        })
    }

    render() {
        const {email, password} =this.state
        return (
            <div>
                <h1 className="judul">Registrasi</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="imgcontainer">
                        <h2><b>Laundry Kita</b></h2>
                    </div>
                    <div className="container">
                        <label><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" value={email} onChange={this.handleChange} required />
                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" value={password} onChange={this.handleChange} required />
                        <button type="submit">Registrasi</button>
                    </div>
                    <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                        <button type="button" className="cancelbtn"><Link to="/login">Punya Akun?</Link></button>
                    </div>
                </form>
            </div>
        );
    }

}
export default Registrasi;