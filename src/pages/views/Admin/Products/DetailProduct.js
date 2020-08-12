import React from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'
const DetailProducts = ({ products, categories }) => {
    let { id } = useParams();
    const product = products.find(product => product.id == id);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={product.image} />
                    </div>
                    <div className="col">
                        <div>
                            <label>Tên sản phẩm:</label>
                            <p>{product.name}</p>
                        </div>
                        <div>
                            <label>Gía sản phẩm:</label>
                            <p>{product.price}</p>
                        </div>
                        <div>
                            <label>Danh mục sản phẩm:</label>
                            {categories.map((cate) => cate.id == product.cateId && <p>{cate.name_category}</p>)}
                        </div>
                        <div>
                            <label>Mô tả sản phẩm:</label>
                            <p>{product.desc}</p>
                        </div>
                    </div>
                </div>
                <Link to="/admin/products" className="btn btn-primary mt-4">Back</Link>
            </div>
        </div>
    )
}

DetailProducts.propTypes = {

}

export default DetailProducts