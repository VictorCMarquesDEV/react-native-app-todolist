import { FlatList, View, Text, Alert } from 'react-native';
import { Task } from '../../components/Task';
import { InputAddTask } from '../../components/InputAddTask';
import { useContext, useEffect } from 'react';
import { TaskProps } from '../../utils/types';
import { Header } from '../../components/Header';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { Container, ContainerList, TextList, TextTitle } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';


export default function List() {

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
        <SafeAreaView style={{ width: '100%', flex: 1 }}>

            <StatusBar backgroundColor='#FFFFFF' />
            <Container>

                <Header leftText nameLeftText='< Voltar' />
                <TextTitle>Lista de Tarefas</TextTitle>

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

                <ContainerList>

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
                                <TextList>Você ainda não cadastrou tarefas!</TextList>
                                <TextList>Crie uma tarefa para começar.</TextList>
                            </View>
                        )}
                    />
                </ContainerList>

            </Container>
        </SafeAreaView>
    );
}

