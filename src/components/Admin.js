import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import {FaEdit} from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { MdAdd, MdKeyboardBackspace } from "react-icons/md";
import firebase from '../Firebase';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('admin');
    this.unsubscribe = null;
    this.state = {
      admin: [],
      key: ''
    };
  }



  onCollectionUpdate = (querySnapshot) => {
    const admin = [];
    querySnapshot.forEach((doc) => {
      const { id, nama, alamat, telepon} = doc.data();
      admin.push({
        key: doc.id,
        doc, // DocumentSnapshot
        id,
        nama,
        alamat,
        telepon,
      });
    });
    this.setState({
      admin
   });
  }

  delete(id){
    firebase.firestore().collection('admin').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/admin")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADMIN LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/dataadmin" class="btn btn-primary"><MdAdd/> Add Admin</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>ID Admin</th>
                  <th>Nama</th>
                  <th>Alamat</th>
                  <th>Telepon</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.admin.map(admin =>
                  <tr>
                    {/* <td><Link to={`/show/${adminiswa.key}`}>{adminiswa.id}</Link></td> */}
                    <td>{admin.id}</td>
                    <td>{admin.nama}</td>
                    <td>{admin.alamat}</td>
                    <td>{admin.telepon}</td>
                    <Link to={`/editadmin/${admin.key}`} class="btn btn-success"><FaEdit/> Edit</Link>&nbsp;
                    <Link to={`/showadmin/${admin.key}`} class="btn btn-warning"><BiDetail/> Show</Link>&nbsp;
                    {/* <button onClick={this.delete.bind(this, this.key)} class="btn btn-danger">Delete</button> */}
                  </tr>
                )}
              </tbody>
            </table>
            <h4><Link to="/dashboard" class="btn btn-info"><MdKeyboardBackspace/> Back to Dashboard</Link></h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;