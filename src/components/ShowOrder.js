import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from "react-icons/fa";

class ShowOrder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      order: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('order').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          order: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
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

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/order">Order List</Link></h4>
            <h3 class="panel-title">
              {this.state.order.title}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Nama:</dt>
              <dd>{this.state.order.nama}</dd>
              <dt>Layanan:</dt>
              <dd>{this.state.order.layanan}</dd>
              <dt>Berat:</dt>
              <dd>{this.state.order.berat}</dd>
              <dt>Total:</dt>
              <dd>{this.state.order.total}</dd>
            </dl>
            {/* <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp; */}
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger"><FaTrashAlt/> Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowOrder;