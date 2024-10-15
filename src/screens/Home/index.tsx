import { Feather } from '@expo/vector-icons';
import { Button } from '../../components/ButtonBlack/Button';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container, ContainerBody, ContainerHeader, ContainerFooter, TextHeader, TextFooter } from './styles';
import { StatusBar } from 'react-native';


export default function Home() {

    const theme = useTheme();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ width: '100%', flex: 1 }}>

            <StatusBar backgroundColor='#FFFFFF' />
            <Container>

                <ContainerHeader>
                    <TextHeader>Seja bem-vindo(a){'\n'}ao TO DO List!</TextHeader>
                </ContainerHeader>

                <ContainerBody>
                    <Feather name="check-circle" size={200} color={theme.COLORS.BLACK} />
                </ContainerBody>

                <ContainerFooter>
                    <TextFooter>O que deseja fazer?</TextFooter>
                    <Button TitleButton='Abrir Calendário' onPress={() => { navigation.navigate('Calendar' as never) }} />
                    <Button TitleButton='Abrir Lista de Tarefas' onPress={() => { navigation.navigate('List' as never) }} />
                </ContainerFooter>

            </Container>
        </SafeAreaView>
    );
}