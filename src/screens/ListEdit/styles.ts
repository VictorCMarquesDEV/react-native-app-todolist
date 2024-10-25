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

export const ContainerDetails = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const ContainerList = styled.View`
    width: 100%;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`;

export const Separator = styled.View`
    width: 100%;
    height: ${RFValue(1)}px;
    background-color: ${theme.COLORS.BLACK};
    margin-top: ${RFValue(20)}px;
    margin-bottom: ${RFValue(20)}px;
`;

export const Title = styled.Text`
    margin-top: ${RFValue(10)}px;
    text-align: center;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
    font-size: ${RFValue(16)}px;
`;

export const Description = styled.Text`
    margin-top: ${RFValue(10)}px;
    text-align: center;
    font-family: ${theme.FONTS.POPPINSLIGHT};
    font-size: ${RFValue(16)}px;
`;