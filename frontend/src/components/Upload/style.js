import styled,  { css } from "styled-components";

/* ================================================================================= */ 

// DropContainer //

const dragActive =  css`
    border-color: #79e5d5;
`;

const dragReject =  css`
    border-color: #e57878;
`;


export const DropContainer = styled.div.attrs({
    className: 'dropzone'
})`
    padding: 10px;
    border: 1px dotted #ccc;
    border-radius: 4px;
    transition: height .3 ease;
    cursor: pointer;

    ${ props => props.isDragActive && dragActive }
    ${ props => props.isDragReject && dragReject }
`;



/* ================================================================================= */ 

// UploadMessager //

const messagerColors= {
    default : '#666666',
    error   : '#e57878',
    success : '#79e5d5'
}

export const UploadMessager = styled.p`
    display: flex;
    color: ${ props => messagerColors[props.type || 'default'] };
    justify-content: center;
    align-items: center;
    padding: 15px 0;
`;