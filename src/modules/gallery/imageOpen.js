import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'

export default class imageOpen extends Component {
    render() {
        return (
           <Image
           source={this.props.getParams('uri')}
           style={{}}
           />
        )
    }
}
