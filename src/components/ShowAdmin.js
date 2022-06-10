import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from "react-icons/fa";

class ShowAdmin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      admin: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('admin').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          admin: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
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

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/admin">Admin List</Link></h4>
            <h3 class="panel-title">
              {this.state.admin.title}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>ID Admin:</dt>
              <dd>{this.state.admin.id}</dd>
              <dt>Nama:</dt>
              <dd>{this.state.admin.nama}</dd>
              <dt>Alamat:</dt>
              <dd>{this.state.admin.alamat}</dd>
              <dt>Telepon:</dt>
              <dd>{this.state.admin.telepon}</dd>
            </dl>
            {/* <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp; */}
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger"><FaTrashAlt/> Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowAdmin;