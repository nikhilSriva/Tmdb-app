import React from 'react'
import {View, Text} from 'components';
import axios from 'axios'
import {getData} from "../../utilities/network/requests";
import {isEmpty} from 'lodash'
import TvShowDataComponent from "./components/TvShowDataComponent";

export default class TvShowScreen extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    fetchData = async () => {
        try {
            this.setState({loading: true});
            let data = await getData('tv', 1)
            console.log(data)
            this.setState({
                data,
                loading: false
            })
        } catch (error) {
            this.setState({loading: false})
        }
    };

    async componentDidMount() {
        this.fetchData()
    }

    componentWillUnmount() {
        console.log('unmoutnMovi')
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {
                    this.state.loading ?
                        <Text>loading</Text> :
                        !isEmpty(this.state.data) && <TvShowDataComponent data={this.state.data}/>

                }
            </View>
        )
    }
}
