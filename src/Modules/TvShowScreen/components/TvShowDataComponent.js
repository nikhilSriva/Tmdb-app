import React from 'react';
import {StyleSheet, View} from 'components';
import {FlatList, RefreshControl} from 'react-native';
import TvShowCard from "./TvShowCard";

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 2
    }
});

class TvShowDataComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    refreshData = () => {
        this.props.fetchMoreData('refresh');
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
                            // refreshing={this.props.refreshing}
                            onRefresh={this.refreshData}
                        />
                    }
                    onEndReachedThreshold={0.2}
                    onMomentumScrollBegin={() => {
                        this.onEndReachedCalledDuringMomentum = true;
                    }}
                    renderItem={({item, index}) => (
                        <TvShowCard item={item} key={index}/>
                    )}
                />
            </View>
        );
    }
}


export default TvShowDataComponent
