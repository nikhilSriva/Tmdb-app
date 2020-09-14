import React from 'react'
import {Text, View} from 'components';
import {getData} from "../../utilities/network/requests";
import {isEmpty} from 'lodash'
import MovieDataComponent from "./components/MovieDataComponent";
import {Snackbar} from "react-native-paper";
import Loader from "../../components/Loader";

export default class MovieScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1,
            data: []
        }
    }

    fetchData = async (page = this.state.currentPage) => {
        console.log('fetching for page', page)
        try {
            this.setState({loading: true});
            let data = await getData('movie', page, this.state)
            console.log(data)
            this.setState((state) => ({
                data,
                showSnackBar: true,
                loading: false,
            }))
        } catch (error) {
            this.setState({loading: false})
        }
    };

    async componentDidMount() {
        this.fetchData()
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <Loader loading={this.state.loading}/>
                {
                    !isEmpty(this.state.data) &&
                    <MovieDataComponent
                        fetchMoreData={() => {
                            this.setState((state) => ({
                                currentPage: state.currentPage + 1
                            }), () => this.fetchData(this.state.currentPage));
                        }}
                        currentPage={this.state.currentPage}
                        data={this.state.data}/>

                }
                <Snackbar
                    duration={1500}
                    style={{
                        flexDirection: 'column',
                        backgroundColor: 'white',
                        elevation: 20,
                        borderRadius: 100,
                        alignSelf: 'center',
                        borderColor: '#999',
                        borderWidth: 0.4,
                    }}
                    visible={this.state.showSnackBar}
                    onDismiss={() => {
                        this.setState({showSnackBar: false});
                    }}>
                    {
                        !isEmpty(this.state.data) &&
                        <Text style={{color: '#222', fontSize: 16}}>{this.state.data?.length} results found</Text>}
                </Snackbar>

            </View>
        )
    }
}
