import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    width: 255px;
    height: 44px;
    background-color: #FFFFFF;
    border-radius: 10px;
`

export const Input = styled.TextInput`
    flex: 1;
    padding-left: 10px;
    color: #292827;
    font-size: 16px;
`

export const Text = styled.Text`
    text-align: center;
    font-weight: bold;
    color: #FFFFFF;
    font-size: 20px;
`

export const InputButton = styled.TouchableOpacity`
    background-color: #1e1e1e;
    padding: 0 16px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`