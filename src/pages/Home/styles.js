import styled from 'styled-components/native';

export const Container = styled.View`
    /* padding: 10px; */
    flex: 1;
    background-color: #fff;
`;

export const ViewInput = styled.View``;

export const Header = styled.SafeAreaView`
justify-content: center;
align-items: center;
margin-top:15px;
`;

export const BtnSearch = styled.TouchableOpacity`
width: 40px;
height: 40px;
justify-content: center;
align-items: center;
/* background-color: #ddd; */
position: absolute;
right: 0;


`;

export const ViewList = styled.View`
justify-content: center;
align-items: center;


`;

export const SearchInput = styled.View`
    flex-direction:row;
    padding: 10px;
    width: 100%;
    height: 40px;
    border-radius: 15px; 
    /* border-width: 2px; */
    box-shadow: 0 3px 1px ${Platform.OS === 'ios'? 'rgba(0,0,0,0.28)': '#000'} ;
    elevation: 5;
    margin-bottom:10px ;
    background-color: #fff;
`;
