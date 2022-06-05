import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('layanan');
    this.state = {
      nama: '',
      harga: '',
      deskripsi: '',
      
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { nama, harga, deskripsi} = this.state;

    this.ref.add({
      nama,
      harga,
      deskripsi,
    }).then((docRef) => {
      this.setState({
        nama: '',
        harga: '',
        deskripsi: '',
      
      });
      this.props.history.push("/layanan")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { nama, harga, deskripsi} = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Add Layanan
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/layanan" class="btn btn-primary">Layanan List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="nama">Nama:</label>
                <input type="text" class="form-control" name="nama" value={nama} onChange={this.onChange} placeholder="Nama" />
              </div>

              <div class="form-group">
                <label for="harga">Harga:</label>
                <input type="text" class="form-control" name="harga" value={harga} onChange={this.onChange} placeholder="Harga" />
              </div>
              
              <div class="form-group">
                <label for="deskripsi">Deskripsi:</label>
                <input type="text" class="form-control" name="deskripsi" value={deskripsi} onChange={this.onChange} placeholder="Deskripsi" />
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