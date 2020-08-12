import React from 'react'
import PropTypes from 'prop-types'

const Contacts = ({ contacts }) => {
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Content</th>
                                    <th scope="col">Auther</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index) => (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{contact.content}</td>
                                        <td>{contact.auther}</td>
                                        <td>{contact.email}</td>
                                        <td>
                                            <button className="btn btn-danger">Xóa</button>
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

Contacts.propTypes = {

}

export default Contacts
