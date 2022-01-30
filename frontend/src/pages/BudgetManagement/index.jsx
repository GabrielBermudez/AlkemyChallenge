import React, {useEffect, useState} from 'react';
import Navbar from '../../components/NavBar';
import {Table, Container, Button} from "react-bootstrap";
import { BsFillEyeFill, BsFillPencilFill, BsFillTrashFill} from "react-icons/bs";
import axios from "axios";

const Index = () => {
    let items = [];
    let [budgetManagement, setBudgetManagement] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/budget-management/all')
            .then(res => {
                setBudgetManagement(res.data.result);
            })
    },[]);

    const handleDelete = (id_budget_management ) => {
        axios.post(`http://localhost:3001/budget-management/delete/${id_budget_management}`)
            .then(res => {
                window.location.href = 'http://localhost:3000/budget-management/index';
            })

    }


    for (const [index, value] of budgetManagement.entries()) {
        items.push(<tr>
            <td>{index + 1}</td>
            <td>{value.concept}</td>
            <td>{value.amount}</td>
            <td>{String(value.date).split('T')[0]}</td>
            <td>{value.type == 'income' ? 'Ingreso' : 'Egreso'}</td>
            <td>
                <Button href="#" variant="primary" className='m-1'><BsFillEyeFill /></Button>
                <Button href={`/budget-management/update/${value.id_budget_management}`} variant="success" className='m-1'><BsFillPencilFill /></Button>
                <Button variant="danger" className='m-1' onClick={ () => handleDelete(value.id_budget_management) }><BsFillTrashFill /></Button>
            </td>
        </tr>);
    }

    return (
        <>
            <Navbar />
            <Container>
                <div className={'d-flex justify-content-center'}>
                    <h1>Ingresos y Egresos</h1>
                </div>
                <Button href="/budget-management/create" variant="primary" className="mb-2">Crear Ingresos y Egresos</Button>
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Concepto</th>
                        <th>Monto</th>
                        <th>Fecha</th>
                        <th>Tipo</th>
                        <td>Acciones</td>
                    </tr>
                    </thead>
                    <tbody>
                    {items}
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default Index;