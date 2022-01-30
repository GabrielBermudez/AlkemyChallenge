import React, {useEffect, useState} from 'react';
import NavBar from "../components/NavBar";
import {Container, Table, Button} from "react-bootstrap";
import axios from "axios";
import {BsFillEyeFill, BsFillPencilFill, BsFillTrashFill} from "react-icons/bs";
//rsc
const Home = () => {
    let items = [];
    let [budgetManagement, setBudgetManagement] = useState([]);
    let [totalBalance, setTotalBalance] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/budget-management/last-register/10')
            .then(res => {
                setBudgetManagement(res.data.result);
            })

        axios.get('http://localhost:3001/budget-management/total-balance')
            .then(res => {
                setTotalBalance(res.data.result._sum.amount);
            })
    },[]);

    for (const [index, value] of budgetManagement.entries()) {
        items.push(<tr>
            <td>{index + 1}</td>
            <td>{value.concept}</td>
            <td>{value.amount}</td>
            <td>{String(value.date).split('T')[0]}</td>
            <td>{value.type == 'income' ? 'Ingreso' : 'Egreso'}</td>
        </tr>);
    }

    return (
        <>
            <NavBar />
            <Container >
                <div className={'d-flex justify-content-center mt-2'}>
                    <h1>Administración de Presupuesto Personal</h1>
                </div>
                <Button href={'/budget-management/index'} variant="primary" className={'mb-2'}>Administrar Ingresos y Egresos</Button>
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Concepto</th>
                        <th>Monto</th>
                        <th>Fecha</th>
                        <th>Tipo</th>
                    </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </Table>
                <h2>Su balance actual es: ${totalBalance}</h2>
            </Container>
        </>
    );
};

export default Home;