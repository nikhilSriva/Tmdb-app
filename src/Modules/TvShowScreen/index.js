import React from 'react'
import {View, Text} from 'components';


export default class TvShowScreen extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        console.log('unmoutnTV')
    }

    render() {
        return (
            <View>
                <Text>Movie Screen</Text>
            </View>
        )
    }
}
