import { Feather } from '@expo/vector-icons';
import { Container, TaskText, ContainerIconEdit, ContainerIconDelete } from './styles'
import { PressableProps } from 'react-native';
import theme from '../../styles/theme';

type Props = PressableProps & {
    data: {
        nametask: string
    }
    onView?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
}


export function Task({ data, onView, onEdit, onDelete }: Props) {

    return (
        <Container onPress={onView}>
            <TaskText>{data.nametask}</TaskText>
            <ContainerIconEdit onPress={onEdit}>
                <Feather name='edit' size={20} />
            </ContainerIconEdit>
            <ContainerIconDelete onPress={onDelete}>
                <Feather name='delete' size={20} color={theme.COLORS.WHITE} />
            </ContainerIconDelete>
        </Container>
    );
}
