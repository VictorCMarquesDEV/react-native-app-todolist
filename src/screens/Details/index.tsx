import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Header } from "../../components/Header";
import { View, StyleSheet, Text } from "react-native";
import { Button as ButtonBlack } from "../../components/ButtonBlack/Button";
import { Button as ButtonOrange } from "../../components/ButtonOrange/Button";
import { TaskProps } from '../../utils/types';


export default function Details() {

    const { tasks, setTasks } = useContext(TaskContext);
    const { task } = useContext(TaskContext);
    const navigation = useNavigation();

    function handleTaskChangeStatus(taskToChange: TaskProps) {
        const updatedTasks = tasks.filter((task) => task.title !== taskToChange.title)
        const newTask = {
            id: taskToChange.id,
            title: taskToChange.title,
            status: !taskToChange.status,
        }
        updatedTasks.push(newTask);
        setTasks(updatedTasks);
        navigation.goBack();
    }

    function handleTaskDelete(taskToDelete: TaskProps) {
        const updatedTasks = tasks.filter((task) => task.title != taskToDelete.title)
        setTasks(updatedTasks);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>

            <Header leftText nameLeftText='< Voltar' />
            <Text style={{ color: '#292827', fontSize: 20, fontWeight: 500, marginBottom: 16 }}>Detalhes da Tarefa</Text>
            <View style={styles.containerText}>
                <Text style={{ color: '#292827', fontSize: 16 }}>Nome: {task.title}</Text>
                <Text style={{ color: '#292827', fontSize: 16 }}>Status: {task.status ? "Concluída" : "Andamento"}</Text>
            </View>

            <View style={styles.containerButton}>
                {task.status && (
                    <ButtonBlack TitleButton="Andamento" onPress={() => handleTaskChangeStatus(task)} />
                )}
                {!task.status && (
                    <ButtonBlack TitleButton="Concluir" onPress={() => handleTaskChangeStatus(task)} />
                )}

                <ButtonOrange TitleButton="Excluir" onPress={() => handleTaskDelete(task)} />

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DADADA',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        paddingTop: 50,
        gap: 16,
    },
    containerText: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        gap: 10,
    },
    containerButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
