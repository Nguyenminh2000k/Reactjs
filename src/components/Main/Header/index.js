import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Header = ({ categories }) => {
    return (
        <div>
            <header>
                {/* Header Start */}
                <div className="header-area">
                    <div className="main-header header-sticky">
                        <div className="container-fluid">
                            <div className="menu-wrapper">
                                {/* Logo */}
                                <div className="logo">
                                    <a href="index.html"><img src="main/img/logo/logo.png" alt /></a>
                                </div>
                                {/* Main-menu */}
                                <div className="main-menu d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/shop">shop</Link></li>
                                            <li><Link to="/about">about</Link></li>
                                            <li className="hot"><a href="#">Categories</a>
                                                <ul className="submenu">
                                                    {categories.map((cate, index) => (
                                                        <li><Link to={`/detail-category/${cate.id}`}>{cate.name_category}</Link></li>
                                                    ))}
                                                </ul>
                                            </li>
                                            <li><Link to="/blog">Blog</Link>
                                                <ul className="submenu">
                                                    <li><Link to="/blog">Blog</Link></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Pages</a>
                                                <ul className="submenu">
                                                    <li><a href="login.html">Login</a></li>
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="elements.html">Element</a></li>
                                                    <li><a href="confirmation.html">Confirmation</a></li>
                                                    <li><a href="checkout.html">Product Checkout</a></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* Header Right */}
                                <div className="header-right">
                                    <ul>
                                        <li>
                                            <div className="nav-search search-switch">
                                                <span className="flaticon-search" />
                                            </div>
                                        </li>
                                        <li> <a href="login.html"><span className="flaticon-user" /></a></li>
                                        <li><a href="cart.html"><span className="flaticon-shopping-cart" /></a> </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Mobile Menu */}
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header End */}
            </header>
        </div>
    )
}

Header.propTypes = {

}

export default Header
