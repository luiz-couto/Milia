import React from 'react';
import Routes from './routes';
import { Provider as PaperProvider } from 'react-native-paper';

export default class App extends React.Component {
    render() {
        return (
          <PaperProvider>
            <Routes />
          </PaperProvider>
        );
    }
}