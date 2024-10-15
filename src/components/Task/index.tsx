import { Feather } from '@expo/vector-icons'
import { Container, TaskTextNoOk, TaskTextOk, TaskDone } from './styles'
import { TaskProps, RootStackParamList } from '../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TaskContext } from '../../context/TaskContext';

type Props = NativeStackScreenProps<RootStackParamList>;


export function Task(props: TaskProps) {

    const navigation = useNavigation<Props['navigation']>();
    const { selectTask } = useContext(TaskContext);

    function handlePress() {
        navigation.navigate('Details' as never);
        selectTask(props);
    }

    return (
        <Container onPress={() => handlePress()} style={props.status ? { backgroundColor: '#FF6B00' } : {}}>
            <TaskDone onPress={props.onCheck}>
                {!props.status && <Feather name="circle" size={15} color="#292827" />}
                {props.status && <Feather name="x" size={15} color="#FFFFFF" />}
            </TaskDone>

            {!props.status && (
                <TaskTextNoOk>{props.title}</TaskTextNoOk>
            )}

            {props.status && (
                <TaskTextOk>{props.title}</TaskTextOk>
            )}

        </Container>
    );
}
