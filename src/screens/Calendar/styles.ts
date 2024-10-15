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

export const ContainerBody = styled.View`
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: ${RFValue(20)}px;
`;

export const ContainerCalendar = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: ${RFValue(10)}px;
    background-color: ${theme.COLORS.GRAY1};
`;

export const TextTitle = styled.Text`
    text-align: center;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
    font-size: ${RFValue(24)}px;
`;

export const TextFooter = styled.Text`
    text-align: center;
    font-family: ${theme.FONTS.POPPINSLIGHT};
    font-size: ${RFValue(18)}px;
`;