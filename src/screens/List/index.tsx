import { FlatList, StyleSheet, View, Text, Alert } from 'react-native';
import { Task } from '../../components/Task';
import { InputAddTask } from '../../components/InputAddTask';
import { useContext, useEffect } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { TaskProps } from '../../utils/types';
import { Header } from '../../components/Header';
import { Formik } from 'formik';
import * as Yup from 'yup'


export default function List() {

    const { tasks, createTask, setTasks } = useContext(TaskContext);

    const TaskSchema = Yup.object().shape({
        taskText: Yup.string().min(3, "No mínimo, 3 caracteres!").max(50, "No máximo, 50 caracteres!").required("Tarefa não pode ser vazia!")
    });

    function handleTaskAdd(taskText: string) {
        if (taskText == "") {
            return Alert.alert("Texto vazio. Digite algo!");
        }
        if (tasks.some((task) => task.title === taskText)) {
            return Alert.alert("Essa tarefa já existe!");
        }

        createTask(taskText);
    }

    function handleTaskChangeStatus(taskToChange: TaskProps) {
        const updatedTasks = tasks.filter((task) => task.title !== taskToChange.title)
        const newTask = {
            id: taskToChange.id,
            title: taskToChange.title,
            status: !taskToChange.status,
        }
        updatedTasks.push(newTask);
        setTasks(updatedTasks);
    }

    useEffect(() => {

    }, [tasks]);

    return (
        <View style={styles.container}>

            <Header leftText nameLeftText='< Voltar' rightText nameRightText='Exportar >' />
            <Text style={{ color: '#292827', fontSize: 20, fontWeight: 500, marginBottom: 16 }}>Lista de Tarefas</Text>

            <Formik
                initialValues={{ taskText: '' }}
                validationSchema={TaskSchema}
                onSubmit={(values, { resetForm }) => {
                    handleTaskAdd(values.taskText);
                    resetForm({ values: { taskText: '' } });
                }}
            >
                {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
                    <View>
                        <InputAddTask
                            onPress={handleSubmit}
                            onChangeText={handleChange('taskText')}
                            onBlur={handleBlur('taskText')}
                            value={values.taskText}
                        />

                        {touched.taskText && errors.taskText && (
                            <Text style={{ color: '#ff0000' }}>{errors.taskText}</Text>
                        )}

                    </View>
                )}

            </Formik>

            <View style={styles.tasks}>

                <FlatList
                    data={tasks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={
                        ({ item }) => (
                            <Task
                                id={item.id}
                                title={item.title}
                                status={item.status}
                                onCheck={() => handleTaskChangeStatus(item)}
                            />
                        )
                    }
                    ListEmptyComponent={() => (
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: '#292827', fontSize: 16, fontWeight: 500 }}>Você ainda não cadastrou tarefas!</Text>
                            <Text style={{ color: '#292827', fontSize: 16, fontWeight: 500 }}>Crie uma tarefa para começar.</Text>
                        </View>
                    )}
                />
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
    tasks: {
        justifyContent: 'flex-start',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
    }
});
