// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import './App.css';
// import firebase from './Firebase';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.ref = firebase.firestore().collection('mahasiswa');
//     this.unsubscribe = null;
//     this.state = {
//       mahasiswa: [],
//       key: ''
//     };
//   }



//   onCollectionUpdate = (querySnapshot) => {
//     const mahasiswa = [];
//     querySnapshot.forEach((doc) => {
//       const { nama, jurusan, prodi, angkatan,  status } = doc.data();
//       mahasiswa.push({
//         key: doc.id,
//         doc, // DocumentSnapshot
//         nama,
//         jurusan,
//         prodi,
//         angkatan,
//         status,
//       });
//     });
//     this.setState({
//       mahasiswa
//    });
//   }

//   delete(id){
//     firebase.firestore().collection('mahasiswa').doc(id).delete().then(() => {
//       console.log("Document successfully deleted!");
//       this.props.history.push("/")
//     }).catch((error) => {
//       console.error("Error removing document: ", error);
//     });
//   }

//   componentDidMount() {
//     this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
//   }

//   render() {
//     return (
//       <div class="container">
//         <div class="panel panel-default">
//           <div class="panel-heading">
//             <h3 class="panel-title">
//               Mahasiwa LIST
//             </h3>
//           </div>
//           <div class="panel-body">
//             <h4><Link to="/create" class="btn btn-primary">Add Mahasiswa</Link></h4>
//             <table class="table table-stripe">
//               <thead>
//                 <tr>
//                   <th>Nama</th>
//                   <th>Jurusan</th>
//                   <th>Prodi</th>
//                   <th>Angkatan</th>
//                   <th>Status</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {this.state.mahasiswa.map(mahasiswa =>
//                   <tr>
//                     {/* <td><Link to={`/show/${mahasiswa.key}`}>{mahasiswa.nama}</Link></td> */}
//                     <td>{mahasiswa.nama}</td>
//                     <td>{mahasiswa.jurusan}</td>
//                     <td>{mahasiswa.prodi}</td>
//                     <td>{mahasiswa.angkatan}</td>
//                     <td>{mahasiswa.status}</td>
//                     <Link to={`/edit/${mahasiswa.key}`} class="btn btn-success">Edit</Link>&nbsp;
//                     <Link to={`/show/${mahasiswa.key}`} class="btn btn-warning">Show</Link>&nbsp;
//                     {/* <button onClick={this.delete.bind(this, this.key)} class="btn btn-danger">Delete</button> */}
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Nav from './Nav';
// import Cart from './frontend/Cart';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Dashboard/>
      </div>
    )
  }
}

export default App;

