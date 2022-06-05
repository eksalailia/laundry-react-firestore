import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import firebase from '../Firebase';

class Order extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('order');
    this.unsubscribe = null;
    this.state = {
      order: [],
      key: ''
    };
  }



  onCollectionUpdate = (querySnapshot) => {
    const order = [];
    querySnapshot.forEach((doc) => {
      const { nama, layanan, berat,  total } = doc.data();
      order.push({
        key: doc.id,
        doc, // DocumentSnapshot
        nama,
        layanan,
        berat,
        total,
      });
    });
    this.setState({
      order
   });
  }

  delete(id){
    firebase.firestore().collection('order').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/order")
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
              ORDER LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/formorder" class="btn btn-primary">Add Order</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Layanan</th>
                  <th>Berat</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.order.map(order =>
                  <tr>
                    {/* <td><Link to={`/show/${mahasiswa.key}`}>{mahasiswa.nama}</Link></td> */}
                    <td>{order.nama}</td>
                    <td>{order.layanan}</td>
                    <td>{order.berat}</td>
                    <td>{order.total}</td>
                    <Link to={`/editorder/${order.key}`} class="btn btn-success">Edit</Link>&nbsp;
                    <Link to={`/showorder/${order.key}`} class="btn btn-warning">Show</Link>&nbsp;
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

export default Order;