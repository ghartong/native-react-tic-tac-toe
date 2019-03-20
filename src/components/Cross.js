import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

export default class Circle extends Component {
    render() {
        const { xTranslate, yTranslate, color } = this.props

        return (
            <View style={[style.container, 
                {transform: [
                    {translateX: (xTranslate ? xTranslate : 10) + 35},
                    {translateY: (yTranslate ? yTranslate : 10) - 12}
                ]}
            ]}>
                <View style={[style.line, {
                    transform: [
                        {rotate: '45deg'},
                    ],
                    backgroundColor: color ? color : '#000'
                }]} />
                <View style={[style.line, {
                    transform: [
                        {rotate: '135deg'},
                    ],
                    backgroundColor: color ? color : '#000'
                }]} />
            </View>
    )}
}

const style = StyleSheet.create({
    container: {
        height: 80,
        position: 'absolute',
        width: 80,
    },
    line: {
        backgroundColor: '#000',
        height: 105,
        position: 'absolute',
        width: 6,
    }
})
