import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../styles/theme";

export const Container = styled.View`
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: ${RFValue(20)}px;
    background-color: ${theme.COLORS.WHITE};
`;

export const ContainerHeader = styled.View`
    width: 100%;
    height: ${RFValue(200)}px;
    justify-content: center;
    align-items: center;
`;

export const ContainerBody = styled.View`
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ContainerFooter = styled.View`
    width: 100%;
    height: ${RFValue(200)}px;
    justify-content: center;
    align-items: center;
    gap: ${RFValue(10)}px;
`;

export const TextHeader = styled.Text`
    text-align: center;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
    font-size: ${RFValue(24)}px;
`;

export const TextFooter = styled.Text`
    text-align: center;
    font-family: ${theme.FONTS.POPPINSLIGHT};
    font-size: ${RFValue(18)}px;
`;
