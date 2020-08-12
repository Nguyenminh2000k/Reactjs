import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

const AddCategories = ({ onAddCate }) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();
    const onSubmit = (data) => {
        Swal.fire(
            'Created!',
            'Your file has been created.',
            'success'
        )
        onAddCate(data);
        history.push("/admin/categories");
    };
    return (
        <div>
            <section class="content">
                <h3 className="card-title">Thêm danh mục</h3>
                <form >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên danh mục</label>
                        <input type="text"
                            name="name_category"
                            className="form-control"
                            id="inputProductName"
                            aria-describedby="emailHelp"
                            ref={register({ required: true })} />
                        {errors.name_category && <span style={{ color: "red" }}>Tên danh mục không được để trống</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Mô tả danh mục</label>
                        <input type="text"
                            name="desc_category"
                            className="form-control"
                            id="inputProductName"
                            aria-describedby="emailHelp"
                            ref={register({ required: true })} />
                        {errors.desc_category && <span style={{ color: "red" }}>Mô tả danh mục không được để trống</span>}
                    </div>
                    <button onClick={handleSubmit(onSubmit)} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </div>
    )
}

AddCategories.propTypes = {

}

export default AddCategories
