import React from 'react';
import NavBar from "../../components/NavBar";
import FormUpdateBudgetManagement from "../../components/FormUpdateBudgetManagement";
import { useParams } from 'react-router-dom';

const Create = () => {
    const { id } = useParams();
    return (
        <>
            <NavBar />
            <FormUpdateBudgetManagement id={id}/>
        </>
    );
};

export default Create;