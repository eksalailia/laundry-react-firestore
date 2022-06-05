import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';


class DataAdmin extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('admin');
    this.state = {
      id: '',
      nama: '',
      alamat: '',
      telepon: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { id, nama, alamat, status, telepon } = this.state;

    this.ref.add({
      id,
      nama,
      alamat,
      telepon
    
    }).then((docRef) => {
      this.setState({
        id: '',
        nama: '',
        alamat: '',
        telepon: ''

      });
      this.props.history.push("/admin")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { id, nama, alamat, telepon} = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Add Admin
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/admin" class="btn btn-primary">Admin List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="id">ID Admin:</label>
                <input type="text" class="form-control" name="id" value={id} onChange={this.onChange} placeholder="Id" />
              </div>

              <div class="form-group">
                <label for="nama">Nama:</label>
                <input type="text" class="form-control" name="nama" value={nama} onChange={this.onChange} placeholder="Nama" />
              </div>
              
              <div class="form-group">
                <label for="alamat">Alamat:</label>
                <input type="text" class="form-control" name="alamat" value={alamat} onChange={this.onChange} placeholder="Alamat" />
              </div>

              <div class="form-group">
                <label for="alamat">Telepon:</label>
                <input type="number" class="form-control" name="telepon" value={telepon} onChange={this.onChange} placeholder="Telepon" />
              </div>

              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DataAdmin;