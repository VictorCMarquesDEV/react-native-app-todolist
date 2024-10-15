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
    gap: ${RFValue(20)}px;
`;

export const ContainerList = styled.View`
    width: 100%;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`;

export const TextTitle = styled.Text`
    text-align: center;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
    font-size: ${RFValue(20)}px;
`;

export const TextList = styled.Text`
    text-align: center;
    font-family: ${theme.FONTS.POPPINSLIGHT};
    font-size: ${RFValue(12)}px;
`;