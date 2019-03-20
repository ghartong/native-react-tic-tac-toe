import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

export default class Circle extends Component {
    render() {
        const { xTranslate, yTranslate, color } = this.props

        return (
            <View style={[style.container, 
                {transform: [
                    {translateX: xTranslate ? xTranslate : 10},
                    {translateY: yTranslate ? yTranslate : 10}
                ],
                backgroundColor: color ? color : '#000'
                }
            ]}>
                <View style={style.innerCircle} />
            </View>
    )}
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 40,
        height: 80,
        justifyContent: 'center',
        position: 'absolute',
        width: 80,
    },
    innerCircle: {
        backgroundColor: '#F5FCFF',
        borderRadius: 35,
        height: 70,
        justifyContent: 'center',
        width: 70,
    }
})
