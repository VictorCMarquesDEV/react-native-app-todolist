import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../styles/theme";

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(40)}px;
    background-color: ${theme.COLORS.GRAY5};
    border-radius: ${RFValue(10)}px;
`

export const Input = styled.TextInput`
    flex: 1;
    padding-top: ${RFValue(3)}px;
    padding-left: ${RFValue(15)}px;
    color: ${theme.COLORS.GRAY1};
    font-size: ${RFValue(12)}px;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`