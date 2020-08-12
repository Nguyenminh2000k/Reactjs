import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

const EditProduct = ({ products, onUpdate, categories }) => {
    let { id } = useParams();
    let history = useHistory();
    let product = products.find((data) => data.id == id);
    const [currentProduct, setCurrentProduct] = useState(product);
    console.log(currentProduct);
    const onHandleSubmit = (e) => {
        Swal.fire(
            'Updated!',
            'Your file has been updated.',
            'success'
        )
        onUpdate(currentProduct);
        history.push("/admin/products");
    };
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setCurrentProduct({
            ...currentProduct,
            [name]: value,
        });
    };
    const { register, handleSubmit, errors } = useForm();
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-100" >
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input type="text" name="name" defaultValue={currentProduct.name} onChange={onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.name && <span style={{ color: "red" }}>Tên sản phẩm không được để trống</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="productName">Ảnh sản phẩm</label>
                    <input type="text" name="image" defaultValue={currentProduct.image} onChange={onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.image && <span style={{ color: "red" }}>Ảnh sản phẩm không được để trống</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="productName">Giá sản phẩm</label>
                    <input type="number" name="price" defaultValue={currentProduct.price} onChange={onHandleChange} className="form-control" ref={register({ required: true, min: 0 })} />
                    {errors.price && errors.price.type === "required" && <span style={{ color: "red" }}>Gía sản phẩm không được để trống</span>}
                    {errors.price && errors.price.type === "min" && <span style={{ color: "red" }}>Gía sản phẩm phải lớn hơn không</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Danh mục</label>
                    <select type="text" name="cateId" defaultValue={currentProduct.cateId} onChange={onHandleChange} className="form-control" ref={register({ required: true })}>
                        {categories && categories.map(({ id, name_category }, index) => (
                            <option value={id}>{name_category}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="productName">Mô tả sản phẩm</label>
                    <textarea type="text" name="desc" defaultValue={currentProduct.desc} onChange={onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.desc && <span style={{ color: "red" }}>Mô tả sản phẩm không được để trống</span>}
                </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

EditProduct.propTypes = {
    products: PropTypes.array
}

export default EditProduct