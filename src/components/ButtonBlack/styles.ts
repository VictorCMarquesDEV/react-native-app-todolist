import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../styles/theme";

export const Container = styled.TouchableOpacity`
    width: ${RFValue(250)}px;
    background-color: ${theme.COLORS.BLACK};
    justify-content: center;
    border-radius: ${RFValue(16)}px;
    flex-direction: row;
    align-items: center;
    padding: 10px 16px 8px 16px;
`;

export const TextButton = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-size: ${RFValue(14)}px;
    text-align: center;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
