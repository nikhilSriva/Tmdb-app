import React from 'react';
import {Text, theme, View} from 'components';
import {Router, Scene, Actions} from 'react-native-router-flux';
import MovieScreen from "./Modules/MovieScreen";
import TvShowScreen from "./Modules/TvShowScreen";
import {TouchableRipple} from "react-native-paper";

const TabIcon = ({selected, title}) => {
    return (
        <TouchableRipple
            style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onPress={() => {
                Actions.replace('tvShowScreen')
            }}>
            <Text>{title}</Text>
        </TouchableRipple>
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
                        unmountScenes={true}
                        lazy={true}
                        tabBarStyle={{backgroundColor: '#FFFFFF'}}
                    >
                        {/* Movie Tab */}
                        <Scene key="movieTab" title="Movies" icon={TabIcon}>
                            <Scene
                                key="movieScreen"
                                onEnter={() => console.log(this.movieScreenRef)}
                                component={MovieScreen}
                                ref={(el) => this.movieScreenRef = el}
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
