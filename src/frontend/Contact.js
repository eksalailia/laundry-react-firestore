import React, { Component } from 'react';
import Navbar from './Navbar';
import gambar1 from './03.jpg'
import './Contact.css';



export class Contact extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <h3 class="contact-us" align="center">Hubungi Kami</h3>
            <section>
                    <div class="container mt-100 mt-60">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="card border-0 text-center features feature-primary feature-clean">
                                    <div class="icons bg-lg text-center mx-auto">
                                        <i class="uil uil-phone d-block rounded-lg h3 mb-0"></i>
                                    </div>
                                    <div class="content mt-4 pt-2">
                                        <h5 class="mb-3">Telepon</h5>
                                        <p class="text-muted">Hubungi nomor telepon di bawah ini untuk informasi lebih lanjut</p>
                                        <a href="tel:+152534-468-854" class="link">087-5344-6885</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-12 mt-5 mt-sm-0">
                                <div class="card border-0 text-center features feature-primary feature-clean">
                                    <div class="icons bg-lg text-center mx-auto">
                                        <i class="uil uil-envelope d-block rounded-lg h3 mb-0"></i>
                                    </div>

                                    <div class="content mt-4 pt-2">
                                        <h5 class="mb-3">Email</h5>
                                        <p class="text-muted">Kirimkan kritik dan saran Anda melalui email di bawah ini</p>
                                        <a href="mailto:contact@example.com" class="link">laundry_kita@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-12 mt-5 mt-lg-0">
                                <div class="card border-0 text-center features feature-primary feature-clean">
                                    <div class="icons bg-lg text-center mx-auto">
                                        <i class="uil uil-map-marker d-block rounded-lg h3 mb-0"></i>
                                    </div>

                                    <div class="content mt-4 pt-2">
                                        <h5 class="mb-3">Lokasi</h5>
                                        <p class="text-muted">Jalan Mayjend Panjaitan No. 25 <br />Malang, Jawa Timur 61585</p>
                                        <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" class="lightbox text-primary" data-type="iframe" data-group="iframe" data-width="1024px" data-height="576px">View on Google map</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
        )
    }
}

export default Contact;