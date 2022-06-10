import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from "react-icons/fa";

class ShowSaran extends Component {

  constructor(props) {
    super(props);
    this.state = {
      kritiksaran: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('kritiksaran').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          kritiksaran: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
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

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/kritiksaran">KRITIK dan SARAN</Link></h4>
            <h3 class="panel-title">
              {this.state.kritiksaran.title}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Kritik:</dt>
              <dd>{this.state.kritiksaran.kritik}</dd>
              <dt>Saran:</dt>
              <dd>{this.state.kritiksaran.saran}</dd>

            </dl>
            {/* <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp; */}
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger"><FaTrashAlt/> Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowSaran;