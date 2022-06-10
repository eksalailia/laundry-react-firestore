import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import {FaList} from "react-icons/fa";

class EditAdmin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      id: '',
      nama: '',
      alamat: '',
      telepon:''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('admin').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const admin = doc.data();
        this.setState({
          key: doc.id,
          id: admin.id,
          nama: admin.nama,
          alamat: admin.alamat,
          telepon: admin.telepon
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({admin:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { id, nama, alamat, telepon } = this.state;

    const updateRef = firebase.firestore().collection('admin').doc(this.state.key);
    updateRef.set({
      id,
      nama,
      alamat,
      telepon
    }).then((docRef) => {
      this.setState({
        key: '',
        id: '',
        nama: '',
        alamat: '',
        telepon: ''
      });
      this.props.history.push("/showadmin/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Edit Admin
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/admin" class="btn btn-primary"><FaList/> Admin List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="id"> Admin:</label>
                <input type="text" class="form-control" name="id" value={this.state.id} onChange={this.onChange} placeholder="ID" />
              </div>
              <div class="form-group">
                <label for="nama">Nama:</label>
                <input type="text" class="form-control" name="nama" value={this.state.nama} onChange={this.onChange} placeholder="Nama" />
              </div>
              <div class="form-group">
                <label for="alamat">Alamat:</label>
                <input type="text" class="form-control" name="alamat" value={this.state.alamat} onChange={this.onChange} placeholder="Alamat" />
              </div>
              <div class="form-group">
                <label for="telepon">Telepon:</label>
                <input type="text" class="form-control" name="telepon" value={this.state.telepon} onChange={this.onChange} placeholder="Telepon" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditAdmin;