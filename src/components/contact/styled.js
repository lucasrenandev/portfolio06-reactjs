import styled from "styled-components";

export const Contact = styled.section`

`
export const ContactContent = styled.div`
    margin-top: 6.5rem;
    .btn {
        cursor: pointer;
    }
`
export const Form = styled.form`
    max-width: 60rem;
    width: 100%;
    height: auto;
    margin: 0 auto;
`
export const InputField = styled.div`
    margin-bottom: 2rem;
`
export const Input = styled.input`
    width: 100%;
    padding: 2rem;
    background-color: #2d343f;
    box-shadow: 0 0 0.5rem var(--main-color);
    border-radius: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-color);
    &::placeholder {
        color: var(--other-color);
        font-weight: 400;
    }   
`
export const TextArea = styled.textarea`
    width: 100%;
    height: 21rem;
    padding: 2rem;
    background-color: #2d343f;
    box-shadow: 0 0 0.5rem var(--main-color);
    border-radius: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-color);
    resize: none;
    &::placeholder {
        color: var(--other-color);
        font-weight: 400;
    }   
`