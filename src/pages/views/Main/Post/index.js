import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Post = ({ posts }) => {
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
                                        <h2>Blog</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*? Hero Area End*/}
                {/*================Blog Area =================*/}
                <section className="blog_area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mb-5 mb-lg-0">
                                <div className="blog_left_sidebar">
                                    {posts.map((post, index) => (
                                        <article className="blog_item">
                                            <div className="blog_item_img">
                                                <img className="card-img rounded-0" src={post.image_post} alt />
                                                <a href="#" className="blog_item_date">
                                                    <p>{post.date}</p>
                                                </a>
                                            </div>
                                            <div className="blog_details">
                                                <Link className="d-inline-block" to={`/detail-blog/${post.id}`}>
                                                    <h2>{post.title}</h2>
                                                </Link>
                                                <p>{post.short_desc}</p>
                                                <ul className="blog-info-link">
                                                    <li><a href="#"><i className="fa fa-user" /> Travel, Lifestyle</a></li>
                                                    <li><a href="#"><i className="fa fa-comments" /> 03 Comments</a></li>
                                                </ul>
                                            </div>
                                        </article>
                                    ))}

                                    <nav className="blog-pagination justify-content-center d-flex">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a href="#" className="page-link" aria-label="Previous">
                                                    <i className="ti-angle-left" />
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a href="#" className="page-link">1</a>
                                            </li>
                                            <li className="page-item active">
                                                <a href="#" className="page-link">2</a>
                                            </li>
                                            <li className="page-item">
                                                <a href="#" className="page-link" aria-label="Next">
                                                    <i className="ti-angle-right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
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
                {/*================Blog Area =================*/}
            </main>

        </div>
    )
}

Post.propTypes = {

}

export default Post
