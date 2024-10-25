import { FlatList, View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Container, ContainerDetails, Title, Description, ContainerList } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { supabase } from '../../database/initializeDB';
import { useRoute } from '@react-navigation/native';
import { TaskItemDatabase } from '../../database/types';
import { TaskItem } from '../../components/TaskItem';


const statusList = [
    { label: 'Em Andamento', value: 1 },
    { label: 'Atrasada', value: 2 },
];

const priorityList = [
    { label: 'Baixa Prioridade', value: 1 },
    { label: 'Alta Prioridade', value: 2 },
];

export default function ListView() {

    const [nameTask, setNameTask] = useState("");
    const [statusTask, setStatusTask] = useState(0);
    const [priorityTask, setPriorityTask] = useState(0);
    const [listTaskItems, setListTaskItems] = useState<TaskItemDatabase[]>([]);

    const route = useRoute();
    const { idTask } = route.params as { idTask: number };

    useEffect(() => {
        const fetchData = async () => {

            try {
                const { data } = await supabase
                    .from('tasks')
                    .select()
                    .eq('idtask', idTask)
                const name = data.map(item => item?.nametask);
                const status = data.map(item => item?.statustask);
                const priority = data.map(item => item?.prioritytask);
                setNameTask(name[0]);
                setStatusTask(status[0]);
                setPriorityTask(priority[0]);
            } catch (err) {
                console.error('Error fetching data:', err);
            }
            try {
                const { data } = await supabase
                    .from('taskitems')
                    .select()
                    .eq('fk_idtask', idTask)
                setListTaskItems(data);
            } catch (err) {
                console.error('Error fetching data:', err);
            }

        };

        fetchData();

    }, [idTask, listTaskItems]);

    const handleDelete = async (idTaskItem: number) => {

        const { data: data1 } = await supabase
            .from('taskitems')
            .delete()
            .eq('idtaskitem', idTaskItem);
    }

    return (
        <SafeAreaView style={{ width: '100%', flex: 1 }}>

            <StatusBar backgroundColor='#FFFFFF' />
            <Container>

                <Header leftText nameLeftText='< Voltar' />

                <Title>Detalhes da Tarefa</Title>

                <ContainerDetails>
                    <Title>Nome: </Title>
                    <Description>{nameTask}</Description>
                </ContainerDetails>
                <ContainerDetails>
                    <Title>Status: </Title>
                    <Description>{statusTask ? statusList[statusTask - 1].label : "Não possui Status"}</Description>
                </ContainerDetails>
                <ContainerDetails>
                    <Title>Prioridade: </Title>
                    <Description>{priorityTask ? priorityList[priorityTask - 1].label : "Não possui Prioridade"}</Description>
                </ContainerDetails>

                <Title>Sub-Tarefas</Title>

                <ContainerList>

                    <FlatList showsVerticalScrollIndicator={false}
                        data={listTaskItems}
                        keyExtractor={(_: any, index: number) => index.toString()}
                        renderItem={
                            ({ item, index }: { item: TaskItemDatabase, index: number }) => (
                                <TaskItem
                                    data={{
                                        nametask: item.nametaskitem
                                    }}
                                    onDelete={() => handleDelete(item.idtaskitem)}
                                />
                            )
                        }
                        ListEmptyComponent={() => (
                            <View style={{ alignItems: 'center', backgroundColor: 'transparent' }}>
                                <Text style={{ color: '#000000', fontSize: 16, fontWeight: 500 }}>Você não cadastrou nenhuma tarefa!</Text>
                            </View>
                        )}
                        style={{ flex: 1, width: '100%' }}
                    />

                </ContainerList>

            </Container>
        </SafeAreaView>
    );
}