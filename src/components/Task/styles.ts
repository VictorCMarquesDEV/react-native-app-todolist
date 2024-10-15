import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 16px;
    padding: 10px 10px;
    gap: 10px;
`

export const TaskTextNoOk = styled.Text`
    color: #292827;
    font-size: 20px;
    font-weight: 500;
    flex: 1;
`

export const TaskTextOk = styled.Text`
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 500;
    flex: 1;
`

export const TaskDone = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
`