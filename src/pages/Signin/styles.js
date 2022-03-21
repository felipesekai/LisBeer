import styled from 'styled-components/native';
import logo from '../../assets/logo-app.png';
export const Container = styled.KeyboardAvoidingView`
    justify-content:space-around;
    align-items:center ;
    /* height: 70%; */
    flex:1;
    /* background-image: url(/path/to/../../assets/logo-app.png); */
    
`;
export const ViewLogo = styled.View`
   flex:1;
   width: 100%;
   justify-content: center;
   align-items: center;
`;


export const ViewContents = styled.View`
   flex:2;
   width: 100%;
   /* justify-content: center; */
   align-items: center;
   /* background-color: #ddd; */
`;
export const Logo = styled.Image`
   width:60%;
   height: 50%; 
   /* margin-bottom: 10px; */ 
`;