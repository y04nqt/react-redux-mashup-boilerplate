import React from 'react'

import ErrorBoundary from './ErrorBoundary'
import Header from './components/Header'
import SampleContainer from './containers/SampleContainer'

class Layout extends React.Component {

    render() {
        logApp();

        return (
            <div className="layout">
                <Header />
                <ErrorBoundary>
                    <SampleContainer />
                </ErrorBoundary>
            </div>
        );
    }
}

export default Layout

function logApp () {
    console.log(window.qlikApp)
    var app = window.qlikApp;
    app.visualization.get('MJaMwK').then(function(vis) {
        console.log('ran inside react component');
        vis.show('fillThis')
    })
}
