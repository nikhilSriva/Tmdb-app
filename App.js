import React from 'react';
import Routes from "./src/Routes";
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const paperTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        accent: '#666',
    },
};
const App = () => {
    return (
        <PaperProvider theme={paperTheme}>
            <Routes/>
        </PaperProvider>
    );
};


export default App;
