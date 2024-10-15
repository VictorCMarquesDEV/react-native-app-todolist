import React from 'react';
import { Container, TextRight, TextLeft, ContainerText } from './styles';
import { useNavigation } from '@react-navigation/native';

interface headerProps {
    leftText?: boolean;
    nameLeftText?: string;
    rightText?: boolean;
    nameRightText?: string;
}

const Header: React.FC<headerProps> = ({ leftText, nameLeftText, rightText, nameRightText }) => {

    const navigation = useNavigation();

    return (
        <Container>

            {leftText && (
                <ContainerText onPress={() => navigation.goBack()}>
                    <TextLeft>{nameLeftText}</TextLeft>
                </ContainerText>
            )}

            {rightText && (
                <ContainerText onPress={() => {
                    alert("Exportando...")
                }}>
                    <TextRight>{nameRightText}</TextRight>
                </ContainerText>
            )}

        </Container>
    );
};

export { Header };
