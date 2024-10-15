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
    gap: ${RFValue(10)}px;
`

export const TaskTextNoOk = styled.Text`
    color: ${theme.COLORS.GRAY1};
    font-size: ${RFValue(16)}px;
    flex: 1;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`

export const TaskTextOk = styled.Text`
    color: ${theme.COLORS.GRAY1};
    font-size: ${RFValue(16)}px;
    flex: 1;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`

export const TaskDone = styled.TouchableOpacity`
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    border-radius: ${RFValue(10)}px;
    background-color: ${theme.COLORS.BLACK};
    justify-content: center;
    align-items: center;
`