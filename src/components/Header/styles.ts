import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../styles/theme";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
`;

export const ContainerText = styled.TouchableOpacity`
    width: 50%;
`;

export const TextLeft = styled.Text`
    color: ${theme.COLORS.GRAY1};
    font-size: ${RFValue(14)}px;
    text-align: left;
    font-family: ${theme.FONTS.POPPINSLIGHT};
`;

export const TextRight = styled.Text`
    color: ${theme.COLORS.GRAY1};
    font-size: ${RFValue(14)}px;
    text-align: right;
`;
