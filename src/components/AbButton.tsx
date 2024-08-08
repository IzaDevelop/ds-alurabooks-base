import React from "react";
import styled, { css } from "styled-components";

export interface AbButtonProps {
    text?: string;
    type?: 'primary' | 'secondary';
    onClick?: () => void;
}

const ButtonStyle = styled.button<AbButtonProps>`
    background: ${(props: AbButtonProps) => props.type === 'primary' ? '#EB9B00' : '#FFF'};
    padding: 16px 32px;
    border: 1px solid #EB9B00;
    color: ${(props: AbButtonProps) => props.type === 'primary' ? '#FFF' : '#EB9B00'};
    font-size: 20px;
    cursor: pointer;
    ${(props: AbButtonProps) => props.type === 'primary'
        ? css`
        &:hover {
            background: #BB7900;
            border: 1px solid #BB7900;
        }`
        : css`
        &:hover {
            background: #FFF;
            border: 1px solid #B87900;
            color: #B87900;
        }`
    };
`

export const AbButton = ({ text, type = 'primary', onClick }: AbButtonProps) => {
    return (
        <ButtonStyle onClick={onClick} type={type}>
            {text}
        </ButtonStyle>
    )
}