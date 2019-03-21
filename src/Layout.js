import React from 'react'

import ErrorBoundary from './ErrorBoundary'
import Header from './components/Header'
import SampleContainer from './containers/SampleContainer'

class Layout extends React.Component {

    render() {
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
