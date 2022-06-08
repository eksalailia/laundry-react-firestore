import React, { Component } from 'react';
import Navbar from './Navbar';
import LogoAB from './01.jpg'
import './About.css';

export class About extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section class="agency section-padding position-re">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="imgsec md-mb50">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="item">
                                    <div>
                                        <img class="thumparallax-down" src={LogoAB} alt="Image" height="450" width="450"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-lg-5 valign">
                    <div class="content">
                        <h3 class="wow" data-splitting>Tentang Laundry Kita </h3>
                        <p class="wow-txt" data-splitting>Laundry Kita adalah company yang bergerak di bidang jasa
                        yang menawarkan jasa cuci pakaian dan sejenisnya.
                            Laundry Kita memudahkan bagi para konsumen agar lebih praktis dalam melakukan pekerjaannya.
                            Laundry Kita sudah memiliki pengalaman lebih dari 5 tahun, sehingga pelayanan Laundry Kita
                            akan sangat terjamin untuk para konsumen.</p>
                         {/* <br/>Pelayanan Laundry Kita pun tidak sembarangan. Laundry Kita akan melayani sepenuh hati</p> */}
                    </div>
                </div>
            </div>
        </div>
        <div class="line bottom right"></div>
    </section>
            
        
            </div>
        )
    }
}

export default About;