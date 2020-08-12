import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
const Categories = ({ categories, onRemoveCate, products }) => {

    function getTotalProduct(id) {
        const number = products.filter((product) => product.cateId == id);
        return number.length;
    }
    const removeHandle = (id) => {
        Swal.fire({
            title: 'Bạn có chắc chắn muốn xóa?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                onRemoveCate(id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
        console.log(id)
    }
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Total product</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map(({ id, name_category }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td><Link to={`/admin/detail-category/${id}`}>{name_category}</Link></td>
                                        <td>{getTotalProduct(id)}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => removeHandle(id)}>Xóa</button>
                                            <Link className='btn btn-primary ml-2' to={`/admin/edit-category/${id}`}>Sửa</Link>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

Categories.propTypes = {

}

export default Categories
