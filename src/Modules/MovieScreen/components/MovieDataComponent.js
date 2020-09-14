import React from 'react';
import {StyleSheet, View} from 'components';
import {FlatList, RefreshControl} from 'react-native';
import MovieCard from "./MovieCard";

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 2
    },
    textInput: {
        flex: 1,
        marginHorizontal: 30,
        maxHeight: 55,
        backgroundColor: 'white',
        padding: 0,
    },
});

class MovieDataComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sentInvites: [],
        };
    }

    refreshData = () => {
        this.props.fetchMoreData();
    };
    _onEndReached = (distanceFromEnd) => {
        if (distanceFromEnd >= 0) {
            this.props.fetchMoreData();
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={{flex: 1, backgroundColor: '#e6e6e6'}}
                    keyExtractor={(item, index) => item.id.toString()}
                    data={this.props.data}
                    onEndReached={({distanceFromEnd}) => {
                        if (this.onEndReachedCalledDuringMomentum) {
                            this._onEndReached(distanceFromEnd);
                        }
                    }}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.refreshing}
                            onRefresh={this.refreshData}
                        />
                    }
                    onEndReachedThreshold={0.2}
                    onMomentumScrollBegin={() => {
                        this.onEndReachedCalledDuringMomentum = true;
                    }}
                    renderItem={({item, index}) => (
                        <MovieCard item={item} key={index}/>
                    )}
                />
            </View>
        );
    }
}


export default MovieDataComponent
