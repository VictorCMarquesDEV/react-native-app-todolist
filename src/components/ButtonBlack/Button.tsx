import React from 'react';
import { Container, TextButton, Content } from './styles';

interface buttonProps {
    TitleButton: string;
    onPress: () => void;
}

const Button: React.FC<buttonProps> = ({ TitleButton, onPress = () => { } }) => {

    return (
        <Container onPress={onPress}>
            <TextButton>{TitleButton}</TextButton>
        </Container>
    );
};

export { Button };
