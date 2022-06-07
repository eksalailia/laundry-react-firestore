import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class FormSaran extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('kritiksaran');
    this.state = {
      kritik: '',
      saran: '',
     
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { kritik, saran } = this.state;

    this.ref.add({
      kritik,
      saran,
    
    }).then((docRef) => {
      this.setState({
        kritik: '',
        saran: '',
      
      });
      this.props.history.push("/home")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { kritik, saran } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
             Silahkan Masukkan Saran dan Kritikan 
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/home" class="btn btn-info">Back to Home</Link></h4>
            <form onSubmit={this.onSubmit}>
              {/* <div class="form-group">
                <label for="kritik">Kritik:</label>
                <input type="text" class="form-control" name="kritik" value={kritik} onChange={this.onChange} placeholder="Kritik" />
              </div>

              
              <div class="form-group">
                <label for="saran">Saran:</label>
                <input type="text" class="form-control" name="saran" value={saran} onChange={this.onChange} placeholder="Saran" />
              </div> */}
               <div class="form-group">
                <label for="kritik">Kritik:</label>
                <textarea cols="30" rows="5" class="form-control" name="kritik" value={kritik} onChange={this.onChange} placeholder="Tulis Kritik Anda..." />
              </div>

              <div class="form-group">
                <label for="kritik">Saran:</label>
                <textarea cols="30" rows="5" class="form-control" name="saran" value={saran} onChange={this.onChange} placeholder="Tulis Saran Anda..." />
              </div>



              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormSaran;