import React, { useState } from 'react';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'
import { Link } from 'react-router-dom'

export default ({ children, categories, products }) => {
    const [filter, setFilter] = useState("")
    return (
        <div>
            <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="preloader-circle" />
                        <div className="preloader-img pere-text">
                            <img src="main/img/logo/logo.png" alt />
                        </div>
                    </div>
                </div>
            </div>
            {/* Preloader Start */}
            <Header categories={categories} />
            {children}
            <Footer />
            {/*? Search model Begin */}
            <div className="search-model-box">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-btn">+</div>
                    <form className="search-model-form">
                        <input value={filter} onChange={(e) => setFilter(e.target.value)} type="text" id="search-input" placeholder="Searching key....." />
                        <ul>
                            {products.map((product, index) => {
                                if (filter.length !== 0) {
                                    if ((product.name).startsWith(filter)) {
                                        return (
                                            <li>
                                                <h3><Link to={`/detail-product/${product.id}`}>{product.name}</Link></h3>
                                            </li>
                                        )
                                    } else {
                                        return null
                                    }
                                }
                            })}
                        </ul>
                    </form>
                    <div>

                    </div>
                </div>
            </div>
        </div>



    )
}
