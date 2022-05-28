import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const ButtonBack = styled.TouchableOpacity`
margin-left: 10px;
margin-top: ${props=> props.mt? props.mt : '15px'};
width: 40px;
/* background-color: #f2a951; */
justify-content: center;
align-items: center;
`;