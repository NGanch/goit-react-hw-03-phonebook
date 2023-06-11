import styled from '@emotion/styled';

export const SearchFormStyled = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
width: 600px;
height: 300px;
align-items: center;
justify-content: center;
box-shadow: 0px 5px 4px rgba(46, 47, 66, 0.08),
0px 4px 4px rgba(46, 47, 66, 0.16),
0px 4px 10px rgba(46, 47, 66, 0.08),
0px 4px 10px rgba(46, 47, 66, 0.08);
`;
 export const LabelName = styled.label`
     display: flex;
    gap: 25px;
    align-items: center;
    font-size: 17px;
    font-weight: 500;
    color: rgb(214, 41, 119);
 `;

export const InputName = styled.input`
    border-color:  rgb(85, 194, 248);
    width: 190px;
    height: 24px;
    
`;


export const LabelNumber = styled.label`
    display: flex;
    gap: 17px;
    align-items: center;
    font-size: 17px;
    font-weight: 500;
    color: rgb(214, 41, 119);
`;
export const InputNumber = styled.input`
    border-color:  rgb(85, 194, 248);
    width: 190px;
    height: 24px;
`;
export const Button = styled.button`
    margin-top: 30px;
    padding: 15px 30px;
    background-color: rgb(85, 194, 248);
    border: none;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 600;
    color: rgb(235, 226, 226);
`;