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
export const Title = styled.Text`
color: ${props=> props.theme.primaryColor};
 font-size:18px;
 letter-spacing: 1px;
 padding: 0px 0px 5px 5px;
 margin-left: 10px;

`;

export const SearchInput = styled.View`
    flex-direction:row;
    padding: 10px;
    width: 80%;
    height: 40px;
    border-radius: 15px; 
    /* border-width: 2px; */
    box-shadow: 0 3px 1px ${Platform.OS === 'ios'? 'rgba(0,0,0,0.28)': '#000'} ;
    elevation: 5;
    margin-bottom:10px ;
    background-color: #fff;
`;
export const TitleAndFilterView = styled.View`
    flex-direction:row;
    /* padding: 10px; */
    justify-content: space-between;
    align-items: center;

`;

export const FilterView = styled.View`
    flex-direction:row;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 40%;
    /* background-color: #fff; */

`;

