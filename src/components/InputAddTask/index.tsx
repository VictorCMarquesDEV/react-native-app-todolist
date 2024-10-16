import { Container, Input } from "./styles";

type Props = {
    onChangeText: (texto: string) => void;
    value: string;
}

export function InputAddTask({ onChangeText, value }: Props) {
    return (
        <Container>
            <Input
                placeholder='Digite algo...'
                placeholderTextColor="#292827"
                keyboardType='default'
                value={value}
                onChangeText={onChangeText}
            />
        </Container>
    );
}