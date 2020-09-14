import {ActivityIndicator} from "react-native-paper";
import React from "react";
import {View} from 'components'

const Loader = ({loading}) => {
    return (
        loading && <View style={{
            backgroundColor: '#cecece',
            position: 'absolute',
            zIndex: 999,
            height: 30,
            width: 30,
            borderRadius: 15,
            left: '47%',
            top: '1%'
        }}>
            <ActivityIndicator
                animating={true}
                color={'#111'}
                size={30}/>
        </View>
    )
}

export default React.memo(Loader)
