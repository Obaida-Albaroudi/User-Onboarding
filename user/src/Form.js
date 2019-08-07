import React, {useState, useEffect} from "react";
import axios from "axios";
import {Form, Field, withFormik } from "formik";
import * as Yup from "yup"
import styled from "styled-components";
import {Card,} from 'semantic-ui-react';

import Info from "./info.js"

const StyleFlexForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center:
width: 1%; 
height: 30%; 
background: red; 
color: white;
border: 3px solid black; 
border-radius: 2%; 
text-align: left;
font-weight: 200; 
font-size: 1rem; 
margin-left: 1rem;
margin-top: 2rem;

`


const StyleAnswer = styled.p`
color: white;
font-size: 1rem; 
margin-top: 1rem;  
`

/*
Name
Email
Password
Terms of Service (Checkbox)
Submit button to send our form data to the server
*/

const UserForm = ({errors, touched, values, status}) =>{
    const [user, setUser] = useState([])
    console.log(user) 

    useEffect (() => {
        if (status) {
            setUser([...user, status])
        }
    },[status]);

    return(

        <div>
            <StyleFlexForm>
                <h1> User Onboarding </h1>

                <Form >
                    <Field type="text" name="Name" placeholder="Name"/>
                    {touched.Name && errors.Name && (
                        <p>{errors.Name}</p>
                    )}<br></br>

                    <Field type="text" name="Email" placeholder="Email"/>
                    {touched.Email && errors.Email && (
                        <p>{errors.Email}</p>
                    )}<br></br>
                    
                    <Field type="password" name="Password" placeholder="Password"/>
                    {touched.Password && errors.Password && (
                        <p>{errors.Password}</p>
                    )}<br></br>
                    
                    <label>
                    
                    <Field type="checkbox" name="TermsOfService" />
                    {touched.TermsOfService && errors.TermsOfService && (
                        <p>{errors.TermsOfService}</p>
                    )}
                    Terms of Service
                    
                    </label><br></br>

                    <button type="submit"> Submit </button>

                </Form>

            </StyleFlexForm>


            <Info props={user}/>

        </div>
    )
}

const Formik = withFormik({
    mapPropsToValues ({Name, Email, Password, TermsOfService}) {
        return {
            Name: Name || '',
            Email: Email || '',
            Password: Password || '',
            TermsOfService: TermsOfService || false
        }
    },

    validationSchema: Yup.object().shape({
        Name: Yup.string().required("Please do not forget your Name!"),
        Email: Yup.string().required("Please do not forget your Email!"),
        Password: Yup.string().min(7, "Password too short").required("Please do not forget your Password!"),
        TermsOfService: Yup.bool().oneOf([true], "Must check this field")

    }),

    handleSubmit(values, { setStatus }){
        axios.post(`https://reqres.in/api/users`, values)
        .then(res => {
            setStatus(res.data)
        })
        .catch(err => console.log(err.response))
    }


})(UserForm)

export default Formik;