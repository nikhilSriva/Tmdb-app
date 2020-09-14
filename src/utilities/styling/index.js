import {Platform} from "react-native";


export default {
    ...Platform.select({
        android: {
            extraSmallFontSize: 14,
            smallFontSize: 16,
            mediumFontSize: 20,
            largeFontSize: 22,
            extraLargeFontSize: 26,

        }, ios: {
            extraSmallFontSize: 14,
            smallFontSize: 16,
            mediumFontSize: 20,
            largeFontSize: 22,
            extraLargeFontSize: 24,
        },
    }),
};
