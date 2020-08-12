import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import firebase from '../../../../firebase'

const AddPost = ({ onAddPost }) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();
    const d = new Date();
    const onSubmit = (data) => {
        // Swal.fire(
        //     'Created!',
        //     'Your file has been created.',
        //     'success'
        // )
        let file = data.image_post[0];
        let storageRef = firebase.storage().ref(`image_post/${file.name}`);
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);

                const newData = {
                    ...data,
                    image_post: url
                };
                console.log(newData);
                onAddPost(newData);
                history.push("/admin/posts");
            })
        });
    };
    return (
        <div>
            <section class="content">
                <h3 className="card-title">Thêm bài viết</h3>
                <form >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tiêu đề bài viết</label>
                        <input type="text"
                            name="title"
                            className="form-control"
                            id="inputProductName"
                            aria-describedby="emailHelp"
                            ref={register({ required: true })} />
                        {errors.title && <span style={{ color: "red" }}>Tiêu đề bài viết không được để trống</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="productPrice">Ảnh bài viết</label>
                        <div className="input-group">
                            <div className="custom-file">
                                <input type="file"
                                    className="custom-file-input"
                                    id="inputGroupFile02"
                                    name="image_post"
                                    ref={register}
                                />
                                <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Mô tả bài viết</label>
                        <input type="text"
                            name="short_desc"
                            className="form-control"
                            id="inputProductName"
                            aria-describedby="emailHelp"
                            ref={register({ required: true })} />
                        {errors.short_desc && <span style={{ color: "red" }}>Nội dung bài viết không được để trống</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nội dung bài viết</label>
                        <input type="text"
                            name="desc_post"
                            className="form-control"
                            id="inputProductName"
                            aria-describedby="emailHelp"
                            ref={register({ required: true })} />
                        {errors.desc_post && <span style={{ color: "red" }}>Nội dung bài viết không được để trống</span>}
                    </div>
                    <div className="form-group">
                        <input type="hidden"
                            name="date"
                            className="form-control"
                            value={d.toLocaleString()}
                            ref={register()} />
                    </div>
                    <button onClick={handleSubmit(onSubmit)} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </div>
    )
}

AddPost.propTypes = {

}

export default AddPost
