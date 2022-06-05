import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import firebase from '../Firebase';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('layanan');
    this.unsubscribe = null;
    this.state = {
      layanan: [],
      key: ''
    };
  }



  onCollectionUpdate = (querySnapshot) => {
    const layanan = [];
    querySnapshot.forEach((doc) => {
      const { nama, harga, deskripsi } = doc.data();
      layanan.push({
        key: doc.id,
        doc, // DocumentSnapshot
        nama,
        harga,
        deskripsi,
        
      });
    });
    this.setState({
      layanan
   });
  }

  delete(id){
    firebase.firestore().collection('layanan').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/dashboard")
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
              LAYANAN LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create" class="btn btn-primary">Add layanan</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Harga</th>
                  <th>Deskripsi</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.layanan.map(layanan =>
                  <tr>
                    {/* <td><Link to={`/show/${layanan.key}`}>{layanan.nama}</Link></td> */}
                    <td>{layanan.nama}</td>
                    <td>{layanan.harga}</td>
                    <td>{layanan.deskripsi}</td>
                    <Link to={`/edit/${layanan.key}`} class="btn btn-success">Edit</Link>&nbsp;
                    <Link to={`/show/${layanan.key}`} class="btn btn-warning">Show</Link>&nbsp;
                    {/* <button onClick={this.delete.bind(this, this.key)} class="btn btn-danger">Delete</button> */}
                  </tr>
                )}
              </tbody>
            </table>
            <h4><Link to="/dashboard" class="btn btn-info">Back to Dashboard</Link></h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;