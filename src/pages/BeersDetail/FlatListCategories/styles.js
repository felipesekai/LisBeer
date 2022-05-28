import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;  
    margin-top:5px;
`;

export const Card = styled.TouchableOpacity`
    padding: 10px;
    margin: 5px 5px;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    background-color: ${props => props.theme.primaryColor};
    box-shadow: 1px 3px 1px ${Platform.OS === 'ios' ? 'rgba(0,0,0,0.28)' : '#000'};
    elevation: 5;
`;
export const Title = styled.Text`
    color: ${props => props.theme.background};
    font-size: 16px;
    font-weight: bold;
`;

// export const ItemName = styled.Text`
//     color: ${props => props.theme.background};
//     font-size: 14px;
// `;