import { View, Text, Alert, StyleSheet } from 'react-native';
import { Task } from '../../components/Task';
import { InputAddTask } from '../../components/InputAddTask';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Container, ContainerList, TextTitle } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { TaskDatabase } from '../../database/types';
import { supabase } from '../../database/initializeDB';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useTheme } from 'styled-components';
import { Button } from '../../components/ButtonBlack/Button';


const statusList = [
    { label: 'Em Andamento', value: 1 },
    { label: 'Concluída', value: 2 },
    { label: 'Atrasada', value: 3 },
];

const priorityList = [
    { label: 'Baixa Prioridade', value: 1 },
    { label: 'Média Prioridade', value: 2 },
    { label: 'Alta Prioridade', value: 3 },
];

export default function ListEdit() {

    const theme = useTheme();
    const navigation = useNavigation();
    const [listTasks, setListTasks] = useState<TaskDatabase[]>([]);
    const [nameTask, setNameTask] = useState("");
    const [statusTask, setStatusTask] = useState(0);
    const [priorityTask, setPriorityTask] = useState(0);

    {/* Dropdown Top Menu */ }
    const [valueTop, setValueTop] = useState(0);
    const [isFocusTop, setIsFocusTop] = useState(false);

    {/* Dropdown Bottom Menu */ }
    const [valueBottom, setValueBottom] = useState(0);
    const [isFocusBottom, setIsFocusBottom] = useState(false);

    function handleGoDetails(idTask: number) {
        navigation.navigate('Details' as never, { idTask })
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await supabase
                    .from('tasks')
                    .select()
                setListTasks(data);
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };
        fetchData();
    }, [listTasks]);

    const handleTaskAdd = async () => {
        if (nameTask == "") {
            return Alert.alert("Texto vazio. Digite algo!");
        }
        if (listTasks.some((task) => task.nametask === nameTask)) {
            return Alert.alert("Essa tarefa já existe!");
        }

        const { data: data1 } = await supabase
            .from('tasks')
            .insert({
                nametask: nameTask,
                statustask: statusTask,
                prioritytask: priorityTask,
            })

        setNameTask("");
        setPriorityTask(0);
        setStatusTask(0);
        setValueBottom(0);
        setValueTop(0);
    }

    return (
        <SafeAreaView style={{ width: '100%', flex: 1 }}>

            <StatusBar backgroundColor='#FFFFFF' />
            <Container>

                <Header leftText nameLeftText='< Voltar' />

                <TextTitle>Adicionar Tarefa</TextTitle>
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
                    labelField="label"
                    valueField="value"
                    placeholder={valueTop ? valueTop.toString() : "Selecione o status"}
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
                    labelField="label"
                    valueField="value"
                    placeholder={valueBottom ? valueBottom.toString() : "Selecione a prioridade"}
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
                    TitleButton='Adicionar'
                    onPress={handleTaskAdd}
                />

                <ContainerList>

                    <TextTitle>Lista de Tarefas</TextTitle>
                    <FlatList showsVerticalScrollIndicator={false}
                        data={listTasks}
                        keyExtractor={(_: any, index: number) => index.toString()}
                        renderItem={
                            ({ item, index }: { item: TaskDatabase, index: number }) => (
                                <Task
                                    data={{
                                        nametask: item.nametask
                                    }}
                                    onPress={() => handleGoDetails(item.idtask)}
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
