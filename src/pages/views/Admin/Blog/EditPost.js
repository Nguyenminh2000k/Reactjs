import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'


const EditPost = ({ posts, onUpdatePost }) => {
    let { id } = useParams();
    let history = useHistory();
    let post = posts.find((data) => data.id == id);
    const [currentPost, setCurrentPost] = useState(post);
    const { register, handleSubmit, errors } = useForm();
    const onHandleSubmit = (e) => {
        Swal.fire(
            'Updated!',
            'Your file has been updated.',
            'success'
        )
        onUpdatePost(currentPost);
        history.push("/admin/posts");
    };
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setCurrentPost({
            ...currentPost,
            [name]: value,
        });
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-100" >
                <div className="form-group">
                    <label htmlFor="productName">Tiêu đề</label>
                    <input type="text" name="title" defaultValue={currentPost.title} onChange={onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.title && <span style={{ color: "red" }}>Tên sản phẩm không được để trống</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Mô tả bài viết</label>
                    <textarea type="text" name="short_desc" defaultValue={currentPost.short_desc} onChange={onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.short_desc && <span style={{ color: "red" }}>Tên sản phẩm không được để trống</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Nội dung bài viết</label>
                    <textarea type="text" name="desc_post" defaultValue={currentPost.desc_post} onChange={onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.desc_post && <span style={{ color: "red" }}>Tên sản phẩm không được để trống</span>}
                </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

EditPost.propTypes = {

}

export default EditPost
