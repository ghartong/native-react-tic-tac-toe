import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Header from './Header'
import GameBoard from './GameBoard'

export default class Splash extends Component {
    constructor(props) {
        super(props)
        this.state={
            gameStarted: false
        }
    }

    startGame() {
        this.setState({
            gameStarted: true
        })
    }

    render() {
        const { gameStarted } = this.state

        return (
            <View style={style.container}>
                <Header />
                { gameStarted ? 
                    <GameBoard />
                :
                    <View>
                        <Text style={style.welcome}>
                            Welcome to the Game!
                        </Text>
                        <TouchableOpacity onPress={() => this.startGame()}>
                            <Text style={style.instructions}>
                                Click here to start
                            </Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
    )}
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        margin: 50
    },
    instructions: {
        color: 'grey',
        marginBottom: 5,
        marginTop: 20,
        textAlign: 'center',
    }
})
