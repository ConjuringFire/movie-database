import React                    from 'react';
import { withRouter }           from 'react-router-dom';
import { connect }              from 'react-redux';
import {Container, Row, Col}    from 'react-bootstrap';
import { AppBar }               from 'material-ui';
import { loadPopularMovies }    from '../../redux/reducers/popularMovies';
import MovieCard                from '../../components/movie-card';
import Loader                   from '../../components/loader';


const styles = {
    movieColumn: {
      marginBottom: 20
    }
}

class Page_Movie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            page: 1
        };
    }

    componentDidMount() {
        this.props.loadPopularMovies(this.state.page)
            .then(() => {
                this.setState({
                    loading: false
                });
            });
    }

    onClick = (movie_id) => {
        let path = `/movie/${movie_id}`
        this.props.history.push(path);
    }

    render() {
        let movies = [];

        let movieColumns = this.props.movies[this.state.page] ? this.props.movies[this.state.page].map(movie => (
            <Col style={styles.movieColumn} key={movie.id} xs={12} sm={6} md={6} lg={3}>
              <MovieCard key={movie.id} id={movie.id} img={movie.poster_path} title={movie.title} date={movie.release_date} score={movie.vote_average} onClick={this.onClick} />
            </Col>
          )) : null;

        return(
            <div>
                <AppBar title="Movies" />
                <Container>
                    <Row>
                        <p>TODO: Search bars</p>
                    </Row>
                    <Row>
                        <Loader loading={this.state.loading} />
                        {movieColumns}
                    </Row>
                </Container>
            </div>
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
        loadPopularMovies: (page) => dispatch(loadPopularMovies(page))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page_Movie));