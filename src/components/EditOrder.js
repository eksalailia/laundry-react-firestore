import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import {FaList} from "react-icons/fa";

class EditOrder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      nama: '',
      layanan: '',
      berat: '',
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('order').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const order = doc.data();
        this.setState({
          key: doc.id,
          nama: order.nama,
          layanan: order.layanan,
          berat: order.berat,
          total: order.total
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({order:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { nama, layanan, berat, total } = this.state;

    const updateRef = firebase.firestore().collection('order').doc(this.state.key);
    updateRef.set({
      nama,
      layanan,
      berat,
      total,
    }).then((docRef) => {
      this.setState({
        key: '',
        nama: '',
        layanan: '',
        berat: '',
        total: ''
      });
      this.props.history.push("/showorder/"+this.props.match.params.id)
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
              Edit Order
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/order" class="btn btn-primary"><FaList/> Order List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="nama">Nama:</label>
                <input type="text" class="form-control" name="nama" value={this.state.nama} onChange={this.onChange} placeholder="Nama" />
              </div>
              <div class="form-group">
                <label for="layanan">layanan:</label>
                <input type="text" class="form-control" name="layanan" value={this.state.layanan} onChange={this.onChange} placeholder="layanan" />
              </div>
              <div class="form-group">
                <label for="berat">berat:</label>
                <input type="text" class="form-control" name="berat" value={this.state.berat} onChange={this.onChange} placeholder="berat" />
              </div>
              <div class="form-group">
                <label for="total">total:</label>
                <input type="number" class="form-control" name="total" value={this.state.total} onChange={this.onChange} placeholder="total" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditOrder;