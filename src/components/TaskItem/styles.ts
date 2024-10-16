import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../styles/theme";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(40)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.COLORS.GRAY5};
    border-radius: ${RFValue(10)}px;
    margin-bottom: ${RFValue(10)}px;
    overflow: hidden;
    padding: 10px 0;
`;

export const ContainerIconEdit = styled.TouchableOpacity`
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.COLORS.YELLOW};
`;

export const ContainerIconDelete = styled.TouchableOpacity`
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.COLORS.RED};
    border-top-right-radius: ${RFValue(10)}px;
    border-bottom-right-radius: ${RFValue(10)}px;
`;

export const TaskText = styled.Text`
    color: ${theme.COLORS.GRAY1};
    font-size: ${RFValue(16)}px;
    flex: 1;
    padding-left: ${RFValue(16)}px;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;
