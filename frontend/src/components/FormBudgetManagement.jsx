import React, {useState} from 'react';
import {Container, Form, Button} from "react-bootstrap";
import axios from 'axios';

const FormBudgetManagement = () => {
    const [concept, setConcept] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('2022/01/22');
    const [type, setType] = useState('income');

    const handleConceptChange = ( e ) => {
        setConcept(e.target.value);
    }

    const handleAmountChange = ( e ) => {
        setAmount(e.target.value);
    }

    const handleDateChange = ( e ) => {
        setDate(e.target.value);
    }

    const handleTypeChange = ( e ) => {
        setType(e.target.value);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        axios.post('http://localhost:3001/budget-management/create',{
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
                    <h1>Crear Ingresos y Egresos</h1>
                </div>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formConcept">
                            <Form.Label>Concepto</Form.Label>
                            <Form.Control type="text" placeholder="" onChange={ handleConceptChange } />
                            <Form.Text className="text-muted">
                                Asegurese de ingresar un concepto que sea conciso y claro.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAmount">
                            <Form.Label>Monto</Form.Label>
                            <Form.Control type="number" placeholder="1599.00" onChange={ handleAmountChange } />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formDate">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="date" placeholder="" onChange={ handleDateChange }/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formIncomeExpenses" onChange={ handleTypeChange }>
                            <Form.Check
                                inline
                                label="Ingresos"
                                name="IncomeExpenses"
                                type="radio"
                                id="income"
                                value="income"
                                checked='checked'
                            />
                            <Form.Check
                                inline
                                label="Egresos"
                                name="IncomeExpenses"
                                type="radio"
                                id="expenses"
                                value="expenses"

                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    );
};

export default FormBudgetManagement;