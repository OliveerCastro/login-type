import styled from 'styled-components';


export const InputContainer = styled.div`
    width: 100%;
    height: 42px;
    color: #FFF;

    border: 1px solid #222;
    border-radius: 21px;
    overflow: hidden;
    padding: 0 10px;
    
    & input {
        width: 100%;
        height: 42px;
        border-radius: 21px;
        background-color: #FFF;
        border: 0;
        outline: none;
    }

`

export const ErrorMessage = styled.p`
    color: #f72406;
    font-size:12px;
    margin-top:8px;
    margin-left:10px;
`