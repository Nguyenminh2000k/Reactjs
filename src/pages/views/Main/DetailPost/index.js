import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

const DetailPost = ({ posts }) => {
    let { id } = useParams();
    const post = posts.find(post => post.id == id)
    return (
        <div>
            <main>
                {/* Hero Area Start*/}
                <div className="slider-area ">
                    <div className="single-slider slider-height2 d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap text-center">
                                        <h2>Blog details</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*================Blog Area =================*/}
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="feature-img">
                                        <img className="img-fluid" src={post.image_post} width="100%" />
                                    </div>
                                    <div className="blog_details">
                                        <h2>{post.title}</h2>
                                        <ul className="blog-info-link mt-3 mb-4">
                                            <li><a href="#"><i className="fa fa-user" /> Travel, Lifestyle</a></li>
                                            <li><a href="#"><i className="fa fa-comments" /> 03 Comments</a></li>
                                        </ul>
                                        <p className="excert">{post.desc_post}</p>

                                    </div>
                                </div>
                                <div className="navigation-top">
                                    <div className="d-sm-flex justify-content-between text-center">
                                        <p className="like-info"><span className="align-middle"><i className="fa fa-heart" /></span> Lily and 4
                people like this</p>
                                        <div className="col-sm-4 text-center my-2 my-sm-0">
                                            {/* <p class="comment-count"><span class="align-middle"><i class="fa fa-comment"></i></span> 06 Comments</p> */}
                                        </div>
                                        <ul className="social-icons">
                                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                            <li><a href="#"><i className="fab fa-dribbble" /></a></li>
                                            <li><a href="#"><i className="fab fa-behance" /></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="blog_right_sidebar">
                                    <aside className="single_sidebar_widget search_widget">
                                        <form action="#">
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Search Keyword" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Keyword'" />
                                                    <div className="input-group-append">
                                                        <button className="btns" type="button"><i className="ti-search" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Search</button>
                                        </form>
                                    </aside>
                                    <aside className="single_sidebar_widget popular_post_widget">
                                        <h3 className="widget_title">Recent Post</h3>
                                        <div className="media post_item">
                                            <img src="assets/img/post/post_1.png" alt="post" />
                                            <div className="media-body">
                                                <a href="single-blog.html">
                                                    <h3>From life was you fish...</h3>
                                                </a>
                                                <p>January 12, 2019</p>
                                            </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="assets/img/post/post_2.png" alt="post" />
                                            <div className="media-body">
                                                <a href="single-blog.html">
                                                    <h3>The Amazing Hubble</h3>
                                                </a>
                                                <p>02 Hours ago</p>
                                            </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="assets/img/post/post_3.png" alt="post" />
                                            <div className="media-body">
                                                <a href="single-blog.html">
                                                    <h3>Astronomy Or Astrology</h3>
                                                </a>
                                                <p>03 Hours ago</p>
                                            </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="assets/img/post/post_4.png" alt="post" />
                                            <div className="media-body">
                                                <a href="single-blog.html">
                                                    <h3>Asteroids telescope</h3>
                                                </a>
                                                <p>01 Hours ago</p>
                                            </div>
                                        </div>
                                    </aside>

                                    <aside className="single_sidebar_widget instagram_feeds">
                                        <h4 className="widget_title">Instagram Feeds</h4>
                                        <ul className="instagram_row flex-wrap">
                                            <li>
                                                <a href="#">
                                                    <img className="img-fluid" src="assets/img/post/post_5.png" alt />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img className="img-fluid" src="assets/img/post/post_6.png" alt />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img className="img-fluid" src="assets/img/post/post_7.png" alt />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img className="img-fluid" src="assets/img/post/post_8.png" alt />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img className="img-fluid" src="assets/img/post/post_9.png" alt />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img className="img-fluid" src="assets/img/post/post_10.png" alt />
                                                </a>
                                            </li>
                                        </ul>
                                    </aside>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*================ Blog Area end =================*/}
            </main>

        </div>
    )
}

DetailPost.propTypes = {

}

export default DetailPost
