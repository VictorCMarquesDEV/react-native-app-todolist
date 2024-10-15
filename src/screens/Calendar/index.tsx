import { StyleSheet, Text, StatusBar } from 'react-native';
import { Header } from '../../components/Header';
import { Calendar as Calendario, DateData, LocaleConfig } from "react-native-calendars"
import { DayState } from "react-native-calendars/src/types"
import { Feather } from "@expo/vector-icons"
import { ptBR } from "../../utils/localeCalendarConfig"
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, ContainerBody, ContainerCalendar, TextTitle } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

LocaleConfig.locales["pt-br"] = ptBR
LocaleConfig.defaultLocale = "pt-br"


export default function Calendar() {

    const [day, setDay] = useState<DateData>()

    return (

        <SafeAreaView style={{ width: '100%', flex: 1 }}>

            <StatusBar backgroundColor='#FFFFFF' />
            <Container>

                <Header leftText nameLeftText='< Voltar' />
                <ContainerBody>
                    <TextTitle>Calendário</TextTitle>
                    <ContainerCalendar>

                        <Calendario
                            style={styles.calendar}
                            renderArrow={(direction: "right" | "left") => (
                                <Feather size={24} color="#E8E8E8" name={`chevron-${direction}`} />
                            )}
                            headerStyle={{
                                borderBottomWidth: 0.5,
                                borderBottomColor: "#E8E8E8",
                                paddingBottom: 10,
                                marginBottom: 10,
                            }}
                            theme={{
                                textMonthFontSize: 18,
                                monthTextColor: "#E8E8E8",
                                todayTextColor: "#FF6B00",
                                selectedDayBackgroundColor: "#FF6B00",
                                selectedDayTextColor: "#E8E8E8",
                                arrowColor: "#E8E8E8",
                                calendarBackground: "transparent",
                                textDayStyle: { color: "#E8E8E8" },
                                textDisabledColor: "#717171",
                                arrowStyle: {
                                    margin: 0,
                                    padding: 0,
                                },
                            }}
                            minDate={new Date().toDateString()}
                            hideExtraDays
                            onDayPress={setDay}
                            markedDates={
                                day && {
                                    [day.dateString]: { selected: true },
                                }
                            }
                            dayComponent={({
                                date,
                                state,
                            }: {
                                date: DateData
                                state: DayState
                            }) => {
                                return (
                                    <TouchableOpacity
                                        style={[
                                            styles.day,
                                            date.dateString === day?.dateString && styles.daySelected,
                                        ]}
                                        onPress={() => setDay(date)}
                                    >
                                        <Text
                                            style={[
                                                styles.dayText,
                                                (state === "inactive" || state === "disabled") &&
                                                styles.disabled,
                                                state === "today" && styles.today,
                                                date.dateString === day?.dateString && styles.dayText,
                                            ]}
                                        >
                                            {date.day}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </ContainerCalendar>
                </ContainerBody>

            </Container>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    calendar: {
        width: '100%',
        margin: 50
    },
    selected: {
        color: "#fff",
        fontSize: 16,
        marginTop: 42,
    },
    dayText: {
        color: "#E8E8E8",
    },
    day: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
    },
    disabled: {
        color: "#717171",
    },
    today: {
        color: "#FF6B00",
        fontWeight: "bold",
    },
    daySelected: {
        backgroundColor: "#FF6B00",
    },
});
