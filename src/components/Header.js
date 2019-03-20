import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>
                    Tic Tac Toe!
                </Text>
            </View>
    )}
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        flexDirection: 'row',
        marginTop: 0
    },
    title: {
        color: '#fff',
        flex: 1,
        fontSize: 23,
        fontWeight: 'bold',
        margin: 10,  
        textAlign: 'center',
    },
})
