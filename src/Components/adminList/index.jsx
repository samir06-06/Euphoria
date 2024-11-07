import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, fetchProducts } from '../../redux/slice/ProductsSlice';
import { deleteUser, fetchAllUsers } from '../../redux/slice/UserSlice';
import './style.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AdminEdit from '../adminEdit';
import { setEditOpen } from '../../redux/slice/interface';
import Swal from 'sweetalert2';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const DATA_COUNT = 20;

function AdminList({ type }) {
    const [currentPage, setCurrentPage] = useState(0);
    const products = useSelector(state => state.products.products);
    const users = useSelector(state => state.user.users);
    const adminCategory = useSelector(state => state.interface.adminCategory);
    const editOpen = useSelector(state => state.interface.editOpen)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [selectedProduct, setselectedProduct] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchAllUsers())
    }, [dispatch]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const itemsCount = Math.ceil(adminCategory.length / DATA_COUNT);

    return (
        <div className="AdminList">

            {editOpen && <AdminEdit product={selectedProduct} />}

            {products && (
                <div className="card">
                    <div className="table-concept">
                        {Array.from({ length: itemsCount }, (_, i) => {
                            const start = i * DATA_COUNT;
                            const end = Math.min(start + DATA_COUNT, products.length);
                            const isChecked = currentPage === i;

                            return (
                                <div key={i}>
                                    <input
                                        type="radio"
                                        name="table_radio"
                                        id={`table_radio_${i}`}
                                        checked={isChecked}
                                        onChange={() => handlePageChange(i)}
                                        className="table-radio"
                                    />
                                    <div className="table-display">
                                        {/* Showing {start + 1} to {end} of {products.length} items */}
                                    </div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>ID</th>
                                                <th>NAME</th>
                                                <th>{adminCategory == "products" ? 'DESCRIPTION' : 'EMAIL'}</th>
                                                <th>{adminCategory == "products" ? 'BRAND' : 'PASSWORD'}</th>
                                                <th>{adminCategory == "products" ? 'PRICE' : 'PHONE'}</th>
                                                {adminCategory == "products" && <th>SALE</th>}
                                                {adminCategory == "products" && <th>STOCK</th>}
                                                {adminCategory == "products" && <th>RATING</th>}
                                                <th>ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                adminCategory == 'products' ? (
                                                    products.slice(start, end).map((product, j) => (
                                                        <tr key={j} onClick={() => {
                                                            setselectedProduct(product)
                                                            dispatch(setEditOpen(true))
                                                        }}>
                                                            <td>
                                                                <input type="checkbox" />
                                                            </td>
                                                            <td>{product.id}</td>
                                                            <td>{product.name}</td>
                                                            <td>{product.description}</td>
                                                            <td>{product.brand}</td>
                                                            <td>{product.price}</td>
                                                            <td>{product.sale}</td>
                                                            <td>{product.stock}</td>
                                                            <td>{product.rating}</td>
                                                            <td><button onClick={(e) => {
                                                                e.stopPropagation()
                                                                Swal.fire({
                                                                    title: "Are you sure?",
                                                                    text: "You won't be able to revert this!",
                                                                    icon: "warning",
                                                                    showCancelButton: true,
                                                                    confirmButtonColor: "#3085d6",
                                                                    cancelButtonColor: "#d33",
                                                                    confirmButtonText: "Delete"
                                                                }).then((result) => {
                                                                    if (result.isConfirmed) {
                                                                        dispatch(deleteProduct(product.id))
                                                                        Swal.fire({
                                                                            title: "Deleted!",
                                                                            text: `${product.name} has been deleted.`,
                                                                            icon: "success"
                                                                        });
                                                                    }
                                                                });

                                                                // dispatch(fetchProducts())

                                                            }}>delete</button></td>
                                                        </tr>
                                                    ))) :

                                                    (
                                                        users.slice(start, end).map((user, j) => (
                                                            <tr key={j}>
                                                                <td>
                                                                    <input type="checkbox" />
                                                                </td>
                                                                <td>{user.id}</td>
                                                                <td>{user.name}</td>
                                                                <td>{user.email}</td>
                                                                <td>{user.password}</td>
                                                                <td>{user.phone}</td>
                                                                {/* <td>{JSON.stringify(user.wishlist)}</td> */}
                                                                {/* <td>{JSON.stringify(user.basket)}</td> */}
                                                                <td><button onClick={(e) => {
                                                                    e.stopPropagation()
                                                                    // dispatch(fetchProducts())
                                                                    Swal.fire({
                                                                        title: "Are you sure?",
                                                                        text: "You won't be able to revert this!",
                                                                        icon: "warning",
                                                                        showCancelButton: true,
                                                                        confirmButtonColor: "#3085d6",
                                                                        cancelButtonColor: "#d33",
                                                                        confirmButtonText: "Delete"
                                                                    }).then((result) => {
                                                                        if (result.isConfirmed) {
                                                                            dispatch(deleteUser(user.id))
                                                                            Swal.fire({
                                                                                title: "Deleted!",
                                                                                text: `${user.name} has been deleted.`,
                                                                                icon: "success"
                                                                            });
                                                                        }
                                                                    });
                                                                }}>delete</button></td>
                                                            </tr>
                                                        ))
                                                    )

                                            }
                                        </tbody>
                                    </table>
                                    <div className="pagination">
                                        <label
                                            htmlFor={`table_radio_${i - 1}`}
                                            className={i === 0 ? 'disabled' : ''}
                                            onClick={() => handlePageChange(currentPage - 1)}
                                        >
                                            &laquo; Previous
                                        </label>
                                        {Array.from({ length: itemsCount }, (_, j) => (
                                            <label
                                                key={j}
                                                htmlFor={`table_radio_${j}`}
                                                id={`table_pager_${j}`}
                                                className={currentPage === j ? 'active' : ''}
                                                onClick={() => handlePageChange(j)}
                                            >
                                                {j + 1}
                                            </label>
                                        ))}
                                        <label
                                            htmlFor={`table_radio_${i + 1}`}
                                            className={i === itemsCount - 1 ? 'disabled' : ''}
                                            onClick={() => handlePageChange(currentPage + 1)}
                                        >
                                            Next &raquo;
                                        </label>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminList;
