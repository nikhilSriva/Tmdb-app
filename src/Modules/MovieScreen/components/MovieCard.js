import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'components';
import {Caption, Subheading, theme, Title} from "../../../components";
import AntIcon from 'react-native-vector-icons/AntDesign'
import {BASE_POSTER_PATH, MOVIE_GENRES} from "../../../utilities/constants";
import {Actions} from 'react-native-router-flux'

const renderGenreTag = (genreArray) => {
    let genres = genreArray.slice(0, 3);
    return <View style={{flexDirection: 'row', flex: -1, alignItems: 'center'}}>
        {genres.map(id => {
            return (
                <View
                    key={id}
                    style={styles.genrePill}>
                    <Caption>{MOVIE_GENRES[id]}</Caption>
                </View>
            )
        })}
        {
            genreArray.length > 3 &&
            <Text>+{genreArray.length - genres.length}</Text>
        }
    </View>
};
const MovieCard = ({item}) => {
    return (
        <TouchableOpacity
            onPress={() => Actions.push('movieDetail', {item})}
            style={styles.card}>
            <View style={{padding: '2%', justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    style={{width: 100, height: 120, borderRadius: 10}}
                    resizeMode="stretch"
                    source={{uri: BASE_POSTER_PATH + item.poster_path}}
                />
            </View>
            <View style={{padding: '2%', flexWrap: 'wrap', flex: 1,}}>
                <View style={{flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
                    <Title>{item.title}</Title>
                    <Subheading style={{paddingHorizontal: 10}}>({item?.release_date?.split('-')[0]})</Subheading>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: "center"}}>
                    <AntIcon
                        name={'star'}
                        size={16}
                        color={'#FFD700'}
                    />
                    <Subheading style={{
                        fontSize: theme.extraSmallFontSize - 1,
                        paddingHorizontal: '1%'
                    }}>{item.vote_average}/10</Subheading>
                    <Caption style={{
                        paddingHorizontal: '0.5%'
                    }}>({item.vote_count})</Caption>
                </View>
                <View style={{flexDirection: 'row', flex: 1, flexWrap: 'wrap'}}>
                    <View style={{justifyContent: 'flex-end', flex: 1}}>
                        {
                            renderGenreTag(item.genre_ids)
                        }
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    genrePill: {
        flex: -1,
        paddingHorizontal: 5,
        margin: 5,
        flexDirection: 'row',
        backgroundColor: '#cecece',
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    card: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: '2%',
        marginVertical: '1%',
        flexDirection: 'row',
        elevation: 8,
        shadowColor: '#999',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowRadius: 2,
        shadowOpacity: 0.6,
        borderWidth: 0.2,
        borderColor: '#999',
    }
})

export default MovieCard
