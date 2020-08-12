import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Blog = ({ posts, onRemovePost }) => {
    console.log(posts);
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
                onRemovePost(id)
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
                                    <th scope="col">Title</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Created At</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((post, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{post.title}</td>
                                        <td><img src={post.image_post} width="100" /></td>
                                        <td>{post.date}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => removeHandle(post.id)}>Xóa</button>
                                            <Link className='btn btn-primary ml-2' to={`/admin/edit-post/${post.id}`} >Sửa</Link>
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
Blog
    .propTypes = {

}

export default Blog
