import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('order');
    this.state = {
      nama: '',
      layanan: '',
      berat: '',
      total: '',
     
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { nama, layanan, berat, total } = this.state;

    this.ref.add({
      nama,
      layanan,
      berat,
      total,
    
    }).then((docRef) => {
      this.setState({
        nama: '',
        layanan: '',
        berat: '',
        total: '',
      
      });
      this.props.history.push("/home")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { nama, layanan, berat, total } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
             Silahkan Isi Form Order
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/home" class="btn btn-info">Back to Home</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="nama">Nama:</label>
                <input type="text" class="form-control" name="nama" value={nama} onChange={this.onChange} placeholder="Nama" />
              </div>

              <div class="form-group">
                <label for="layanan">Pilih Layanan:</label>
                <input type="text" class="form-control" name="layanan" value={layanan} onChange={this.onChange} placeholder="Layanan" />
              </div>
              
              <div class="form-group">
                <label for="berat">berat:</label>
                <input type="number" class="form-control" name="berat" value={berat} onChange={this.onChange} placeholder="berat" />
              </div>

              <div class="form-group">
                <label for="berat">total:</label>
                <input type="number" class="form-control" name="total" value={total} onChange={this.onChange} placeholder="total" />
              </div>


              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;