import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
`;

export const Header = styled.header`
    width: 100%;
    height: 60px;
    font-size: xx-large;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: teal;
    color: white;box-shadow: 0 0 0 5px teal;
`;

export const Wrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    display: flex;
`;

// whole posts container
export const PostsContainer = styled.div`
    width: 60%;
    padding: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: #00808020;
`;

// single post container
export const PostContainer = styled.div`
    display: block;
    background-color: white;
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    ${props => props.selected && 'box-shadow: 0 0 0 5px teal;'}

    ${props => !props.selected && '&:hover {box-shadow: 0 0 0 5px #00808050;}'}

    &:active {
        filter: brightness(0.8);    
    }

    h1 {
        width: 100%;
    }

    p {
        width: 100%;
        text-align: justify;
    }
`;

export const AddButton = styled.button`
    position: absolute;
    bottom: 10px;
    right: 10px;

    width: 60px;
    height: 60px;

    background-color: white;
    color: #4BB543;
    font-size: xx-large;
    border: 2px solid #4BB543;
    border-radius: 50%;

    &:hover {
        background-color: #4BB543;
        color: white;
    }

    &:active {
        filter: brightness(0.8);    
    }
`;

export const RightSideContainer = styled.section`
    width: 40%;
    padding: 10px;
`;

export const DetailsContainer = styled.div`
    width: 100%;
`;

export const CreatePostFormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const FormSection = styled.section`
    width: 100%;
    padding: 5px;
    display: flex;
`;

export const FormLabel = styled.label`
    width: 40%;
`;

export const FormInput = styled.input`
    width: 60%;
`;

export const Button = styled.button`
    width: fit-content;
    min-width: 100px;
    padding: 10px;
    text-transform: uppercase;
    background-color: white;
    color: ${props => props.color || 'teal'};
    border: 2px solid ${props => props.color || 'teal'};
    border-radius: 10px;

    &:hover {
        color: white;
        background-color: ${props => props.color || 'teal'};
    }

    &:active {
        filter: brightness(0.8);    
    }
`;