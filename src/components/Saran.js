import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import firebase from '../Firebase';

class Saran extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('kritiksaran');
    this.unsubscribe = null;
    this.state = {
      kritiksaran: [],
      key: ''
    };
  }



  onCollectionUpdate = (querySnapshot) => {
    const kritiksaran = [];
    querySnapshot.forEach((doc) => {
      const { kritik, saran } = doc.data();
      kritiksaran.push({
        key: doc.id,
        doc, // DocumentSnapshot
        kritik,
        saran,
      });
    });
    this.setState({
      kritiksaran
   });
  }

  delete(id){
    firebase.firestore().collection('kritiksaran').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/kritiksaran")
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
              KRITIK dan SARAN 
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/formsaran" class="btn btn-primary">Add Kritik Saran</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Kritik</th>
                  <th>Saran</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.kritiksaran.map(kritiksaran =>
                  <tr>
                    {/* <td><Link to={`/show/${mahasiswa.key}`}>{mahasiswa.nama}</Link></td> */}
                    <td>{kritiksaran.kritik}</td>
                    <td>{kritiksaran.saran}</td>

                    <Link to={`/editsaran/${kritiksaran.key}`} class="btn btn-success">Edit</Link>&nbsp;
                    <Link to={`/showsaran/${kritiksaran.key}`} class="btn btn-warning">Show</Link>&nbsp;
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

export default Saran;