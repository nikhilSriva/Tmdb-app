import React from 'react';
import {Text} from 'components';
import {Actions, Router, Scene} from 'react-native-router-flux';
import MovieScreen from "./Modules/MovieScreen";
import TvShowScreen from "./Modules/TvShowScreen";
import {TouchableRipple} from "react-native-paper";
import DetailScreen from "./Modules/MovieScreen/components/MovieDetail";
import TvShowDetail from "./Modules/TvShowScreen/components/TvShowDetail";

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
                    <Scene
                        key="movieDetail"
                        component={DetailScreen}
                        hideNavBar
                    />
                    <Scene
                        key="tvShowDetail"
                        component={TvShowDetail}
                        hideNavBar
                    />
                </Scene>
            </Router>
        );
    }
}

export default Routes
