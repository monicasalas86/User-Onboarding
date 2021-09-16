import styled from 'styled-components'

const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    .form-container {
        height: 65%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .form-container h2 {
        color: #77AF9C;
    }

    .form-inputs{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 50%;
        width: 30%;
        background-color: #285943;
        color: white;
        border-radius: 20px;
    }

`

export default StyledForm;