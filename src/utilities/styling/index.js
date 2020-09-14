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
            extraSmallFontSize: 16,
            smallFontSize: 18,
            mediumFontSize: 22,
            largeFontSize: 24,
            extraLargeFontSize: 28,
        },
    }),
};
