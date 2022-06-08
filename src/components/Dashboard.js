import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Firebase';


class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('admin');
        this.unsubscribe = null;
        this.state = {
            admin: []
        };
    }
  
  
  
    onCollectionUpdate = (querySnapshot) => {
        const admin = [];
        querySnapshot.forEach((doc) => {
            const { id, nama, alamat, telepon} = doc.data();
            admin.push({
                key: doc.id,
                doc, // DocumentSnapshot
                id,
                nama,
                alamat,
                telepon
            });
        });
        this.setState({
            admin
        });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }


    render() {
        let adminList = this.state.admin.map(admin => {
            return (
                <div class="card mb-2" style={{ width: '28rem' }}>
                     <div class="card bg-info text-white">
	                    <div class="card-header">
                        <h4>Admin Laundry Kita</h4><hr className="border-white"/>
                        <div>ID Admin&ensp;&ensp;: {admin.id}</div>
                        <div>Nama &emsp;&ensp;&ensp; : {admin.nama}</div>
                        <div>Alamat&ensp;&ensp;&ensp;&ensp;: {admin.alamat}</div>
                        <div>Telepon&emsp;&ensp; : {admin.telepon}</div>
                    </div>
                </div>
                </div>
            )
        })
        return (
            <div className="container">
                <h2 className="layan" align="left">Daftar Admin</h2><br></br>
                <div className="box" align="left">
                    {adminList}
                </div>
            </div>
        )
    }

}


export default Dashboard;