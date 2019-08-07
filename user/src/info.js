import React from "react";
import styled from "styled-components";
import {Card,} from 'semantic-ui-react';


const Info = props => {

        console.log("child", props)

        const StyleCard = styled.div`
        width: 25%; 
        height: 30%; 
        background: grey; 
        color: black;
        border: 3px solid blue; 
        border-radius: 2%; 
        text-align: left;
        font-weight: 600; 
        font-size: 1rem; 
        margin-left: 1rem;
        margin-top: 2rem;
    
        `
        const StyleAnswer = styled.p`
        color: white;
        font-size: 1rem; 
        margin-top: 1rem;  
        `
        
        const StyleFlex = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        `    


   
    return (

        <StyleFlex> 
            {props.props.map(info =>{
                return(
                    <StyleCard> 
                        <Card.Group>
                            <Card>
                                
                                <Card.Header>Name: <StyleAnswer>{info.Name}</StyleAnswer></Card.Header>
                                <Card.Content> Bio: <StyleAnswer>{info.Email}</StyleAnswer></Card.Content> 
                                <Card.Content>Password: <StyleAnswer>{info.Password}</StyleAnswer> </Card.Content> 
                            </Card>

                        </Card.Group>

                    </StyleCard>
                )

            })}        
        </StyleFlex>

        
    );
}


export default Info;
