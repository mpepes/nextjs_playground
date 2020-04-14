import React, { Component } from 'react';
import { withRouter } from 'next/router';

class CustomRoute extends Component {
    render() {
        const { router } = this.props;

        return (
            <div>
                <p>classy component with router HOOK access by HOC.</p>
                <p>{`As path= ${router.asPath}`}</p>
            </div>
        )
    }
}

export default withRouter(CustomRoute);
