import styled from "styled-components";

export const Container = styled.ul`
    margin-top: 20px;
    
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #444;
        & + li {
            margin-top: 15px
        }
    }
`; 


export const FileInfo = styled.div`
    display: flex;
    justify-content: center;

    div {
        display: flex;
        flex-direction: column;
        span {
            font-size: 12px;
            color: #999;
            margin-top: 5px;
            button {
                border: none;
                background: transparent;
                margin-left: 5px;
                color: #e57878;
                cursor: pointer;
            }
        }
    }
`;

export const Preview = styled.div`
    width: 36px;
    height: 36px;
    margin-right: 10px;
    border-radius: 4px;
    background: url(${ props => props.src }) center center no-repeat;
    background-size: cover;
`;