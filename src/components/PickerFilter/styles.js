import styled from 'styled-components/native';

export const Container = styled.View`
/* flex-direction:row; */
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 40%;
    /* background-color: #fff; */
`;

export const ContainerIos = styled.TouchableOpacity`
/* flex-direction:row; */
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 40%;
    /* background-color: #fff; */
`;
export const ModalView = styled.SafeAreaView`      
    /* align-items: center; */
    height: 50%;
    width: 100%;
    background-color:${props=> props.theme.background};
    /* justify-content: center; */
    position: absolute;
    bottom: 0px;


`;

export const Header = styled.View`     
    /* height: 30px; */
    width: 100%;
    justify-content: flex-end;
    align-items: flex-end;
    border-bottom-width: 1px;
    border-top-width: 1px;
    padding: 10px;
    border-color: ${props=> props.theme.primaryColor};
`;

export const LinkClose = styled.Text`     
   font-size:16px;
   color: ${props=> props.theme.primaryColor};

`;

export const FilterTitle = styled.Text`
color: ${props=> props.theme.primaryColor};
 font-size:14px;
 /* letter-spacing: 1px; */
 /* padding: 0px 0px 5px 5px; */
 margin-right: 10px;

`;