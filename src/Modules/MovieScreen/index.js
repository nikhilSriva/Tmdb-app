import React from 'react'
import {View, Text} from 'components';


export default class MovieScreen extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {

    }
    componentWillUnmount(){
        console.log('unmoutnMovi')
    }

    render() {
        return (
            <View>
                <Text>Movie Screen</Text>
            </View>
        )
    }
}
