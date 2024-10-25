import { FlatList, StyleSheet, View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Container, Title, ContainerList, Separator } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { supabase } from '../../database/initializeDB';
import { useRoute } from '@react-navigation/native';
import { TaskItemDatabase } from '../../database/types';
import { TaskItem } from '../../components/TaskItem';
import { Dropdown } from 'react-native-element-dropdown';
import { Button } from '../../components/ButtonBlack/Button';
import { useTheme } from 'styled-components';
import { InputAddTask } from '../../components/InputAddTask';


const statusList = [
    { label: 'Em Andamento', value: 1 },
    { label: 'Atrasada', value: 2 },
];

const priorityList = [
    { label: 'Baixa Prioridade', value: 1 },
    { label: 'Alta Prioridade', value: 2 },
];

export default function ListEdit() {

    const theme = useTheme();
    const [nameTask, setNameTask] = useState("");
    const [statusTask, setStatusTask] = useState(0);
    const [priorityTask, setPriorityTask] = useState(0);
    const [listTaskItems, setListTaskItems] = useState<TaskItemDatabase[]>([]);
    const [nameTaskItem, setNameTaskItem] = useState("");

    const route = useRoute();
    const { idTask } = route.params as { idTask: number };

    {/* Dropdown Top Menu */ }
    const [valueTop, setValueTop] = useState(0);
    const [isFocusTop, setIsFocusTop] = useState(false);

    {/* Dropdown Bottom Menu */ }
    const [valueBottom, setValueBottom] = useState(0);
    const [isFocusBottom, setIsFocusBottom] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await supabase
                    .from('tasks')
                    .select()
                    .eq('idtask', idTask)
                setNameTask(data[0].nametask);
                setStatusTask(data[0].statustask);
                setPriorityTask(data[0].prioritytask);
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };
        fetchData();
    }, [idTask]);

    useEffect(() => {
        const fetchData = async () => {
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
    }, [listTaskItems]);

    const handleUpdate = async () => {
        if (nameTask == "") {
            return alert("Texto vazio. Digite algo!");
        }

        const { error } = await supabase
            .from('tasks')
            .update({
                nametask: nameTask,
                statustask: statusTask,
                prioritytask: priorityTask
            })
            .eq('idtask', idTask)
        if (error) {
            alert(error.message)
        } else {
            alert("Tarefa atualizada!")
        }
    }

    const handleDelete = async (idTaskItem: number) => {

        const { data: data1 } = await supabase
            .from('taskitems')
            .delete()
            .eq('idtaskitem', idTaskItem);
    }

    const handleAdd = async () => {
        if (nameTaskItem == "") {
            return alert("Texto vazio. Digite algo!");
        }
        if (listTaskItems.some((task) => task.nametaskitem === nameTaskItem)) {
            return alert("Essa sub-tarefa já existe!");
        }

        const { data: data1 } = await supabase
            .from('taskitems')
            .insert({
                nametaskitem: nameTaskItem,
                fk_idtask: idTask,
            })

        setNameTaskItem("");
    }

    return (
        <SafeAreaView style={{ width: '100%', flex: 1 }}>

            <StatusBar backgroundColor='#FFFFFF' />
            <Container>

                <Header leftText nameLeftText='< Voltar' />

                <Title>Detalhes da Tarefa</Title>

                <InputAddTask
                    onChangeText={setNameTask}
                    value={nameTask}
                />

                <Dropdown
                    style={[styles.dropdown, isFocusTop && { borderColor: theme.COLORS.GRAY1 }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={statusList}
                    maxHeight={300}
                    labelField={"label"}
                    valueField={"value"}
                    placeholder={statusTask ? statusList[statusTask - 1].label : " "}
                    value={valueTop.toString()}
                    onFocus={() => setIsFocusTop(true)}
                    onBlur={() => setIsFocusTop(false)}
                    onChange={item => {
                        setValueTop(item.value);
                        setStatusTask(item.value);
                        setIsFocusTop(false);
                    }}
                />

                <Dropdown
                    style={[styles.dropdown, isFocusBottom && { borderColor: theme.COLORS.GRAY1 }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={priorityList}
                    maxHeight={300}
                    labelField={"label"}
                    valueField={"value"}
                    placeholder={priorityTask ? priorityList[priorityTask - 1].label : " "}
                    value={valueBottom.toString()}
                    onFocus={() => setIsFocusBottom(true)}
                    onBlur={() => setIsFocusBottom(false)}
                    onChange={item => {
                        setValueBottom(item.value);
                        setPriorityTask(item.value);
                        setIsFocusBottom(false);
                    }}
                />

                <Button
                    TitleButton='Atualizar Tarefa'
                    onPress={handleUpdate}
                />

                <Separator />

                <InputAddTask
                    onChangeText={setNameTaskItem}
                    value={nameTaskItem}
                />

                <Button
                    TitleButton='Adicionar Sub-Tarefa'
                    onPress={handleAdd}
                />

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

const styles = StyleSheet.create({
    dropdown: {
        width: '100%',
        height: 50,
        borderColor: '#1e1e1e',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 16,
        color: '#1e1e1e',
    },
    placeholderStyle: {
        fontSize: 16,
        color: '#1e1e1e',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#1e1e1e',
    }
});
