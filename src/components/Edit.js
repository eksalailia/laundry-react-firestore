import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      nama: '',
      harga: '',
      deskripsi: '',
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('layanan').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const layanan = doc.data();
        this.setState({
          key: doc.id,
          nama: layanan.nama,
          harga: layanan.harga,
          deskripsi: layanan.deskripsi,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({layanan:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { nama, harga, deskripsi } = this.state;

    const updateRef = firebase.firestore().collection('layanan').doc(this.state.key);
    updateRef.set({
      nama,
      harga,
      deskripsi
    }).then((docRef) => {
      this.setState({
        key: '',
        nama: '',
        harga: '',
        deskripsi: ''
      });
      this.props.history.push("/show/"+this.props.match.params.id)
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
              Edit layanan
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/layanan" class="btn btn-primary">layanan List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="nama">Nama:</label>
                <input type="text" class="form-control" name="nama" value={this.state.nama} onChange={this.onChange} placeholder="Nama" />
              </div>
              <div class="form-group">
                <label for="harga">harga:</label>
                <input type="text" class="form-control" name="harga" value={this.state.harga} onChange={this.onChange} placeholder="harga" />
              </div>
              <div class="form-group">
                <label for="deskripsi">deskripsi:</label>
                <input type="text" class="form-control" name="deskripsi" value={this.state.deskripsi} onChange={this.onChange} placeholder="deskripsi" />
              </div>
            
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;