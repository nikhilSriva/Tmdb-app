import React, {useEffect, useState} from 'react'
import {Image, Title, View} from 'components';
import {BASE_BACKDROP_PATH} from "../../../utilities/constants";
import {Caption, Dimensions, Headline, ScrollView, Text} from "../../../components";
import {getResourceDetail} from "../../../utilities/network/requests";
import moment from 'moment'
import StarRating from "react-native-star-rating";

const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
const TvShowDetail = React.memo(({item}) => {
    const [detail, setDetail] = useState({})

    useEffect(() => {
        const fetchDetails = async () => {
            let data = await getResourceDetail('tv', item.id);
            setDetail(data)
        }
        fetchDetails()
    }, []);

    useEffect(() => {
        return () => {
            console.log("cleaned up");
        };
    }, []);
    return (
        <View style={{flex: 1}}>
            <View style={{width: WIDTH, height: HEIGHT * 0.42}}>
                <Image
                    style={{flex: 1}}
                    resizeMode="cover"
                    source={{uri: BASE_BACKDROP_PATH + item.backdrop_path}}
                />
            </View>
            <View style={{flex: 1, padding: '4%'}}>
                <View style={{flex: -1}}>
                    <Title style={{fontSize: 32, letterSpacing: 2}}>{item.name}</Title>
                    <View style={{flexDirection: 'row', flex: -1, flexWrap: 'wrap'}}>
                        <Caption>{detail.number_of_seasons} Seasons - {detail.number_of_episodes} Episodes</Caption>
                        <View style={{borderRightWidth: 1, borderRightColor: '#adadad', marginHorizontal: 10}}/>
                        {
                            detail?.genres?.map(({name}, index) => <Caption
                                style={{paddingHorizontal: 1}}>{name}{index + 1 !== detail?.genres.length && ','}</Caption>)
                        }
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <StarRating
                            disabled={true}
                            maxStars={10}
                            rating={item.vote_average}
                            starSize={13}
                            fullStarColor={'#FFD700'}
                            containerStyle={{
                                width: 120,
                                marginVertical: '1%',
                                marginRight: '4.5%'
                            }}
                        />
                        <Text style={{fontWeight: '600'}}>{item.vote_average}</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    flex: -1,
                    justifyContent: 'space-between',
                    paddingVertical: '4%',
                    marginBottom: '2%'
                }}>
                    <View>
                        <Headline style={{fontSize: 20}}>First Episode Aired</Headline>
                        <Text
                            style={{fontSize: 15}}>{moment(detail.first_air_date).format('LL')}</Text>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <ScrollView>
                        <Text>{detail.overview}</Text>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
})

export default TvShowDetail

