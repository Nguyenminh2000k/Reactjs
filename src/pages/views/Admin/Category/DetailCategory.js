import React from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'

const DetailCategory = ({ categories, products }) => {
    let { id } = useParams();
    const category = categories.find(category => category.id == id);
    const mystyle = {
        fontFamily: "Arial",
        fontWeight: "bold",
        color: "black"
    };
    return (
        <div className="content-wraper">
            <div>
                <label>Tên danh mục:</label>
                <p style={mystyle}>{category.name_category}</p>
            </div>
            <div>
                <label>Mô tả danh mục:</label>
                <p style={mystyle}>{category.desc_category}</p>
            </div>
            <hr />
            <div className="table-responsive">
                <label style={mystyle}>Danh sách sản phẩm thuộc danh mục: <span></span></label>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => product.cateId == category.id &&
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td><Link to={`/admin/detail-product/${product.id}`}>{product.name}</Link></td>
                                <td><img src={product.image} width="50" /></td>
                                <td>{product.price}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        </div >
    )
}

DetailCategory.propTypes = {

}

export default DetailCategory
