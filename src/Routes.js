import React from 'react';
import {Text, theme, View} from 'components';
import {Router, Scene} from 'react-native-router-flux';
import MovieScreen from "./Modules/MovieScreen";
import TvShowScreen from "./Modules/TvShowScreen";

const TabIcon = ({selected, title}) => {
    return (
        <Text>{title}</Text>
    );
};

class Routes extends React.Component {
    constructor(properties) {
        super(properties);
        this.state = {}

    }

    render() {
        return (
            <Router>
                <Scene hideNavBar key="root">
                    {/* Tabs Container */}
                    <Scene
                        key="tabbar"
                        tabs={true}
                        tabBarStyle={{backgroundColor: '#FFFFFF'}}
                    >
                        {/* Movie Tab */}
                        <Scene key="movieTab" title="Movies" icon={TabIcon}>
                            <Scene
                                key="movieScreen"
                                component={MovieScreen}
                            />
                        </Scene>

                        {/* TvShow Tab */}
                        <Scene key="tvShowTab" title="TV Shows" icon={TabIcon}>
                            <Scene
                                key="tvShowScreen"
                                component={TvShowScreen}
                            />
                        </Scene>

                    </Scene>
                </Scene>
            </Router>
        );
    }
}

export default Routes
