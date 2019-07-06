import React                from 'react';
import { Route, Switch }    from 'react-router-dom';

import Page_Movie           from './movie';
import Page_MovieDetails    from './movie/details';
import Page_404             from './404';

class Page_Container extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="main">
                <Switch>
                    <Route exact path='/'           component={Page_Movie} />
                    <Route path='/movie/:id'        component={Page_MovieDetails} />
                    <Route path='/search/:search'   component={Page_Movie} />
                    <Route component={Page_404} />
                </Switch>
            </div>
        );
    }
}

export default Page_Container;