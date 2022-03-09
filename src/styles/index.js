import styled from 'styled-components/native';

export const Background = styled.SafeAreaView`
flex: 1;
background-color: #fff;
`;
export const Container = styled.View``;

export const InputView = styled.View`
  width: 80%;  
`;
export const InputStyle = styled.View`
    flex-direction:row;
    padding: 10px;
    width: 100%;
    height: 40px;
    border-radius: 15px; 
    border-width: 1px;
    box-shadow: 0 3px 1px rgba(0,0,0,0.28);
    margin-bottom:10px ;
`;

export const InputTitle = styled.Text`
 color: #000;
 font-size:18px;
`;

export const ButtonLogin = styled.TouchableOpacity`
 width: 60%;
 height: 40px;
 justify-content: center;
 align-items: center;
 background-color: #000;
 box-shadow: 0 3px 1px rgba(0,0,0,0.28);
 border-radius: 15px;
 margin-bottom:10px ;
`;

export const ButtonText = styled.Text`
color: #fff;
 font-size:16px;
 font-weight:bold;
`;


export const LinkSignup = styled.TouchableOpacity`
 width: 60%;
 justify-content: center;
 align-items: center;
 margin-bottom:10px ;
`;

export const LinkText  = styled(ButtonText)`
color: #000000;
font-style: italic;
font-weight:normal ;
 
`;