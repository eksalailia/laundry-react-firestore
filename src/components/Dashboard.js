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
                <div class="card" style={{ width: '28rem' }}>
                     <div class="card bg-info text-white">
	                    <div class="card-header">
                        <h4>Daftar Admin</h4><hr className="border-white"/>
                        <div>{admin.id}</div>
                        <div>{admin.nama}</div>
                        <div>{admin.alamat}</div>
                        <div>{admin.telepon}</div>
                    </div>
                </div>
                </div>
            )
        })
        return (
            <div className="container">
                <h2 className="layan" align="left">Admin LaundryKita</h2><br></br>
                <div className="box" align="left">
                    {adminList}
                </div>
            </div>
        )
    }

}


export default Dashboard;