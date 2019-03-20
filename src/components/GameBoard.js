//https://medium.com/@davidguandev/building-a-tic-tac-toe-in-react-native-2a3c44e697f2
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { centerPoints, areas, conditions } from '../constants/Game'
import Circle from './Circle'
import Cross from './Cross'

// If result === -1 ongoing game; if result === 0 user won
// if result === 1 AI won; if result === 2 No winner
export default class GameBoard extends Component {
    constructor() {
        super()
        this.state = {
            userInputs:[],
            aiInputs:[],
            result: -1
        }
    }

    restart() {
        this.setState({
            userInputs:[],
            aiInputs:[],
            result: -1
        })
    }

    boardClickHandler(e) {
        const { locationX, locationY } = e.nativeEvent
        const { userInputs } = this.state

        const area = areas.find(d => 
            (locationX >= d.startX && locationX <= d.endX) &&
            (locationY >= d.startY && locationY <= d.endY) )

        if (area && userInputs.every(d => d !== area.id)) {
            this.setState( { userInputs: userInputs.concat(area.id) } )
            setTimeout(() => this.AIAction(), 3)
        }
    }

    AIAction() {
        while(true) {
            const { userInputs, aiInputs } = this.state
            const inputs = userInputs.concat(aiInputs)
            const randomNumber = Number.parseInt(Math.random() * 9)

            if (inputs.every(d => d !== randomNumber)) {
                this.setState( { aiInputs: aiInputs.concat(randomNumber) } )
                break
            }    
        }
    }

    judgeWinner(inputs) {
        return conditions.some(d => d.every(item => inputs.indexOf(item) !== -1) )
    }

    componentDidMount() {
        this.AIAction()
    }

    componentDidUpdate() {
        const { userInputs, aiInputs, result } = this.state
        const inputs = userInputs.concat(aiInputs)

        if (inputs.length === 9 && result < 0) {
            this.setState({result: 2})
            return
        }

        if (inputs.length >= 5) {
            let res = this.judgeWinner(userInputs)
            if (res && result !== 0) {
                this.setState({result: 0})
                return
            }
            res = this.judgeWinner(aiInputs)
            if (res && result !== 1) {
                this.setState({result: 1})
                return
            }
        }
    }

    render() {
        const { userInputs, aiInputs, result } = this.state

        return (
            <View style={style.container}>
                <TouchableWithoutFeedback onPress={e => this.boardClickHandler(e)}>
                    <View style={style.board}>
                        <View style={ [style.line, style.vertical, {transform: [{translateX: 100}]} ]} />
                        <View style={ [style.line, style.vertical, {transform: [{translateX: 200}]} ]} />
                        <View style={ [style.line, style.horizontal, {transform: [{translateY: 100}]} ]} />
                        <View style={ [style.line, style.horizontal, {transform: [{translateY: 200}]} ]} />
                        { userInputs.map((d, i) => (
                            <Cross key={i} xTranslate={centerPoints[d].x} yTranslate={centerPoints[d].y} color='deepskyblue' />
                        ))}
                        { aiInputs.map((d, i) => (
                            <Circle key={i} xTranslate={centerPoints[d].x} yTranslate={centerPoints[d].y} color='red' />
                        ))}
                    </View>
                </TouchableWithoutFeedback>
                { result === 2 &&  <Text>Sorry, there is no winner</Text>}
                { result === 1 &&  <Text>Red Wins!!</Text>}
                { result === 0 &&  <Text>Blue Win!!</Text>}
                { result !== -1 && 
                    <TouchableOpacity onPress={() => this.restart()}>
                        <Text style={style.instructions}>Click here to start another game</Text>
                    </TouchableOpacity>
                }
            </View>
    )}
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    instructions: {
        color: 'grey',
        marginBottom: 5,
        marginTop: 20,
        textAlign: 'center',
    },
    board: {
        borderWidth: 3,
        borderColor: '#000',
        height: 306,
        width: 306,
    },
    line: {
        backgroundColor: '#000', 
        position: 'absolute',
    },
    vertical: {
        height: 300,
        width: 3, 
    },
    horizontal: {
        height: 3,
        width: 300, 
    }
})
