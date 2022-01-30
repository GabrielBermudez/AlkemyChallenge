import React, {useEffect, useState} from 'react';
import {Container, Form, Button} from "react-bootstrap";
import axios from 'axios';

const FormUpdateBudgetManagement = ({id}) => {
    const [concept, setConcept] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:3001/budget-management/find-register/${id}`)
            .then(res => {
                setConcept(res.data.result.concept);
                setAmount(res.data.result.amount);
                setDate(res.data.result.date);
                setType(res.data.result.type);
            })
    },[]);

    const handleConceptChange = ( e ) => {
        setConcept(e.target.value);
    }

    const handleAmountChange = ( e ) => {
        setAmount(e.target.value);
    }

    const handleDateChange = ( e ) => {
        setDate(e.target.value);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/budget-management/update/${id}`,{
            concept: concept,
            amount: amount,
            date: date,
            type: type
        })
            .then(res => {
                if(!res.error)
                    window.location.href = 'http://localhost:3000/budget-management/index';
            })
    }

    return (
        <>
            <Container>
                <div className="d-flex justify-content-center">
                    <h1>Actualizar Ingresos y Egresos</h1>
                </div>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formConcept">
                            <Form.Label>Concepto</Form.Label>
                            <Form.Control type="text" placeholder="" value={concept} onChange={ handleConceptChange } />
                            <Form.Text className="text-muted">
                                Asegurese de ingresar un concepto que sea conciso y claro.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAmount">
                            <Form.Label>Monto</Form.Label>
                            <Form.Control type="number" placeholder="1599.00" value={amount} onChange={ handleAmountChange } />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formDate">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="date" placeholder="" value={String(date).split('T')[0]} onChange={ handleDateChange }/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formIncomeExpenses">
                            <Form.Check
                                inline
                                label="Ingresos"
                                name="IncomeExpenses"
                                type="radio"
                                id="income"
                                value="income"
                                checked={type == 'income' ? 'checked' : ''}
                                disabled={true}
                            />
                            <Form.Check
                                inline
                                label="Egresos"
                                name="IncomeExpenses"
                                type="radio"
                                id="expenses"
                                value="expenses"
                                checked={type == 'expenses' ? 'checked' : ''}
                                disabled={true}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Actualizar
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    );
};

export default FormUpdateBudgetManagement;