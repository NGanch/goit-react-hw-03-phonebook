import styled from "@emotion/styled";
export const ContactsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 500px;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
`;
export const ContactsItem = styled.li`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;
export const ContactsName = styled.p`
    font-size: 17px;
    font-weight: bold;
    color: rgb(73, 136, 195);
`;
export const ContactsNumber = styled.span`
    padding-left: 10px;
`;
export const Button = styled.button`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    align-self: center;
    padding: 15px 25px;
    background-color: rgb(214, 41, 119);
    color: rgb(235, 226, 226);
    border: none;
    border-radius: 5px;
    font-size: 17px;
    font-weight: bold;
`;


