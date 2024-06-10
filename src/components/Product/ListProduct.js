import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const endpoint = 'http://localhost:8000/api';

const ListProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`);
        setProducts(response.data);
    };

    const deleteProduct = async (id) => {
        await axios.delete(`${endpoint}/products/${id}`);
        getAllProducts();
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Cantidad</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((products) => (
                        <TableRow key={products.id}>
                            <TableCell component="th" scope="row">{products.name_product}</TableCell>
                            <TableCell align="right">{products.cantidad_product}</TableCell>
                            <TableCell align="right">{products.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
};

export default ListProduct;
