import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Firebase';

class Home extends Component {

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('layanan');
        this.unsubscribe = null;
        this.state = {
            layanan: []
        };
    }
  
  
  
    onCollectionUpdate = (querySnapshot) => {
        const layanan = [];
        querySnapshot.forEach((doc) => {
            const { nama, harga, deskripsi} = doc.data();
            layanan.push({
                key: doc.id,
                doc, // DocumentSnapshot
                nama,
                harga,
                deskripsi
            });
        });
        this.setState({
            layanan
        });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }


    render() {
        let layananList = this.state.layanan.map(layanan => {
            return (
                <div class="card" style={{ width: '28rem' }}>
                    <div class="card bg-info text-white">
	                <div class="card-header">
                        <h4>Layanan</h4><hr className="border-white"/>
                        <p class="card-title">{layanan.nama}</p>
                        <p class="card-title">{layanan.harga}</p>
                        <p class="card-title">{layanan.deskripsi}</p>
                    </div>
                </div>
                </div>
                
            )
        })
        return (
            <div className="container">
                <h2 className="center">Daftar Layanan</h2><br></br>
                <div className="box" align="center">
                    {layananList}
                </div>
            </div>
        )
    }

}


export default Home;