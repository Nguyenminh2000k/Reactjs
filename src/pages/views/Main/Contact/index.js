import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

const Contact = ({ onAddContact }) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();
    const onSubmit = (data) => {
        Swal.fire(
            'Created!',
            'Your file has been created.',
            'success'
        )
        onAddContact(data);
        console.log(data)
        history.push("/");
    };
    return (
        <div>
            <main>
                {/*? Hero Area Start*/}
                <div className="slider-area ">
                    <div className="single-slider slider-height2 d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap text-center">
                                        <h2>Contacts</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*? Hero Area End*/}
                {/* ================ contact section start ================= */}
                <section className="contact-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="contact-title">Get in Touch</h2>
                            </div>
                            <div className="col-lg-8">
                                <form className="form-contact contact_form" >
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea ref={register({ required: true })} className="form-control w-100" name="content" id="message" cols={30} rows={9} onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder=" Enter Message" defaultValue={""} />
                                                {errors.content && <span style={{ color: "red" }}>Tên danh mục không được để trống</span>}
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input ref={register({ required: true })} className="form-control valid" name="auther" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name" />
                                                {errors.auther && <span style={{ color: "red" }}>Tên danh mục không được để trống</span>}
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input ref={register({ required: true })} className="form-control valid" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email" />
                                                {errors.email && <span style={{ color: "red" }}>Tên danh mục không được để trống</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <button type="submit" onClick={handleSubmit(onSubmit)} className="button button-contactForm boxed-btn">Send</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-3 offset-lg-1">
                                <div className="media contact-info">
                                    <span className="contact-info__icon"><i className="ti-home" /></span>
                                    <div className="media-body">
                                        <h3>Buttonwood, California.</h3>
                                        <p>Rosemead, CA 91770</p>
                                    </div>
                                </div>
                                <div className="media contact-info">
                                    <span className="contact-info__icon"><i className="ti-tablet" /></span>
                                    <div className="media-body">
                                        <h3>+1 253 565 2365</h3>
                                        <p>Mon to Fri 9am to 6pm</p>
                                    </div>
                                </div>
                                <div className="media contact-info">
                                    <span className="contact-info__icon"><i className="ti-email" /></span>
                                    <div className="media-body">
                                        <h3>support@colorlib.com</h3>
                                        <p>Send us your query anytime!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ================ contact section end ================= */}
            </main>

        </div>
    )
}

Contact.propTypes = {

}

export default Contact
