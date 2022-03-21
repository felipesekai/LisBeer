import styled from 'styled-components/native';

export const Background = styled.SafeAreaView`
flex: 1;
background-color: ${props=> props.theme.background};
`;
export const Container = styled.View`
justify-content: center;
align-items: center;
flex: 1;
`;

export const InputView = styled.View`
  width: 80%;  
`;

export const InputStyle = styled.View`
    flex-direction:row;
    padding: 10px;
    width: 100%;
    height: 40px;
    border-radius: 15px; 
    border-width: 2px;
    border-color: ${props=> props.theme.primaryColor};
    background-color: #454f5a;
    box-shadow: 0 3px 1px rgba(0,0,0,0.28);
    margin-bottom:20px;
`;
export const Input = styled.TextInput`
    height: 100%;
    width: 100%;
    color: #fff;
`;

export const InputTitle = styled.Text`
 color: ${props=> props.theme.primaryColor};
 font-size:18px;
 letter-spacing: 1px;
 padding: 0px 0px 5px 5px;
`;

export const ButtonLogin = styled.TouchableOpacity`
 width: 60%;
 height: 40px;
 justify-content: center;
 align-items: center;
 background-color: ${props=> props.theme.primaryColor};
 box-shadow: 1px 2px 2px ${Platform.OS === 'ios'? 'rgba(0,0,0,0.28)' : '#000'};
 elevation: 5;
 border-radius: 15px;
 margin-top: 10px;
 margin-bottom:10px ;
`;

export const ButtonText = styled.Text`
 color: ${props=> props.theme.buttonTextColor};
 font-size:16px;
 font-weight:bold;
 text-transform: uppercase;
 letter-spacing: 4px;
`;


export const LinkSignup = styled.TouchableOpacity`
 width: 60%;
 
 padding: 10px;
 justify-content: center;
 align-items: center;
 margin:10px ;
`;

export const LinkText  = styled(ButtonText)`
color: ${props=> props.theme.textColor};
font-style: italic;
font-weight:normal ;
letter-spacing: 1px;
text-transform: none; 
`;