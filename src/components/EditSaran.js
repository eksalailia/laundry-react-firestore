import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class EditSaran extends Component {

  constructor(props) {
    super(props);
    this.state = {
      kritik: '',
      saran: '',

    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('kritiksaran').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const kritiksaran = doc.data();
        this.setState({
          key: doc.id,
          kritik: kritiksaran.kritik,
          saran: kritiksaran.saran
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({kritiksaran:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { kritik, saran } = this.state;

    const updateRef = firebase.firestore().collection('kritiksaran').doc(this.state.key);
    updateRef.set({
      kritik,
      saran,
 
    }).then((docRef) => {
      this.setState({
        key: '',
        kritik: '',
        saran: ''
      });
      this.props.history.push("/showsaran/"+this.props.match.params.id)
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
              Edit Kritik Saran
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/kritiksaran" class="btn btn-primary">Kritik dan Saran</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="kritik">Kritik:</label>
                <input type="text" class="form-control" name="kritik" value={this.state.kritik} onChange={this.onChange} placeholder="kritik" />
              </div>
              <div class="form-group">
                <label for="saran">Saran:</label>
                <input type="text" class="form-control" name="saran" value={this.state.saran} onChange={this.onChange} placeholder="saran" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditSaran;