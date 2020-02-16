import React from 'react';
import Routes from './routes';
import { Provider as PaperProvider } from 'react-native-paper';
import { YellowBox } from "react-native"

YellowBox.ignoreWarnings([
  "Warning: ViewPagerAndroid has been extracted",
])

export default class App extends React.Component {
    render() {
        return (
          <PaperProvider>
            <Routes />
          </PaperProvider>
        );
    }
}