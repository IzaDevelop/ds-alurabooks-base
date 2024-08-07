import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
    background: #EB9B00;
    padding: 16px 32px;
    border: 1px solid #EB9B00;
    color: #FFF;
    font-size: 20px;
    cursor: pointer;
    &:hover {
        background: #BB7900;
        border: 1px solid #BB7900;
    }
`

export const AbButton = () => {
    return (
        <ButtonStyle>
            Clique Aqui!
        </ButtonStyle>
    )
}