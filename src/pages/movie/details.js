import React            from 'react';
import { withRouter }   from 'react-router-dom';
import { connect }      from 'react-redux';
import { loadMovie }    from '../../redux/reducers/movies';

class Page_MovieDetails extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props.history);

        this.state = {
            movie_id: 429617
        };
    }

    componentDidMount() {
        this.props.loadMovie(this.state.movie_id);
    }

    render() {
        return (
            <div>ddd</div>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        movies: state.movies
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        loadMovie: (movie_id) => dispatch(loadMovie(movie_id))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page_MovieDetails));