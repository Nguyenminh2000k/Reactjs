import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import firebase from '../../../../firebase'

const AddProduct = ({ onAdd, categories }) => {
    console.log(categories);
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();
    const onSubmit = (data) => {

        let file = data.image[0];
        let storageRef = firebase.storage().ref(`image/${file.name}`);
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                const newData = {
                    ...data,
                    image: url
                }
                console.log(newData);
                onAdd(newData);
                history.push("/admin/products");
            })
        });


    };
    return (
        <div>
            <section class="content">
                <h3 className="card-title">Thêm sản phẩm</h3>
                <form >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
                        <input type="text"
                            name="name"
                            className="form-control"
                            id="inputProductName"
                            aria-describedby="emailHelp"
                            ref={register({ required: true })} />
                        {errors.name && <span style={{ color: "red" }}>Tên sản phẩm không được để trống</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Gía sản phẩm</label>
                        <input type="number"
                            name="price"
                            className="form-control"
                            id="inputProductName"
                            aria-describedby="emailHelp"
                            ref={register({ required: true, min: 0 })} />
                        {errors.price && errors.price.type === "required" && <span style={{ color: "red" }}>Gía sản phẩm không được để trống</span>}
                        {errors.price && errors.price.type === "min" && <span style={{ color: "red" }}>Gía sản phẩm phải lớn hơn không</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="productPrice">Ảnh sản phẩm</label>
                        <div className="input-group">
                            <div className="custom-file">
                                <input type="file"
                                    className="custom-file-input"
                                    id="inputGroupFile02"
                                    name="image"
                                    ref={register}
                                />
                                <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Danh mục</label>
                        <select type="text" name="cateId" className="form-control" ref={register({ required: true })}>
                            <option value="0">Chưa chọn danh mục</option>
                            {categories && categories.map(({ id, name_category }, index) => (
                                <option value={id}>{name_category}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Mô tả sản phẩm</label>
                        <textarea className="form-control"
                            name="desc" id="inputProductName"
                            type="text"
                            ref={register({ required: true })} />
                        {errors.desc && <span style={{ color: "red" }}>Mô tả sản phẩm không được để trống</span>}
                    </div>
                    <button onClick={handleSubmit(onSubmit)} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </div>
    )
}
AddProduct.propTypes = {
    onAdd: PropTypes.func
}

export default AddProduct;