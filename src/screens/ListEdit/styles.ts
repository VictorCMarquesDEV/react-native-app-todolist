import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../styles/theme";

export const Container = styled.View`
    width: 100%;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    padding: ${RFValue(20)}px;
    background-color: ${theme.COLORS.WHITE};
    gap: ${RFValue(10)}px;
`;

export const ContainerList = styled.View`
    width: 100%;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`;

export const TextTitle = styled.Text`
    margin-top: ${RFValue(10)}px;
    text-align: center;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
    font-size: ${RFValue(16)}px;
`;
