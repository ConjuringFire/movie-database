import React                from 'react';
import { Route, Switch }    from 'react-router-dom';
import PageMovie            from './movie';
import PageMovieDetails     from './movie/details';
import Page_404             from './404';

class PageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="main">
                <Switch>
                    <Route exact path='/'           component={PageMovie} />
                    <Route path='/movie/:id'        component={PageMovieDetails} />
                    <Route path='/search/:search'   component={PageMovie} />
                    <Route component={Page_404} />
                </Switch>
            </div>
        );
    }
}

export default PageContainer;