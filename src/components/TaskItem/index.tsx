import { Feather } from '@expo/vector-icons';
import { Container, TaskText, ContainerIconEdit, ContainerIconDelete } from './styles'
import { PressableProps } from 'react-native';
import theme from '../../styles/theme';

type Props = PressableProps & {
    data: {
        nametask: string
    }
    onDelete?: () => void;
}


export function TaskItem({ data, onDelete }: Props) {

    return (
        <Container>
            <TaskText>{data.nametask}</TaskText>
            <ContainerIconDelete onPress={onDelete}>
                <Feather name='delete' size={20} color={theme.COLORS.WHITE} />
            </ContainerIconDelete>
        </Container>
    );
}
