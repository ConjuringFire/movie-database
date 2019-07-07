import React                    from 'react';
import { withRouter }           from 'react-router-dom';
import { connect }              from 'react-redux';
import { Container, Row, Col }  from 'react-bootstrap';
import { loadPopularMovies }    from '../../redux/reducers/popularMovies';
import { searchMovie }          from '../../redux/reducers/search';
import Header                   from '../../components/header';
import MovieCard                from '../../components/movie-card';
import Loader                   from '../../components/loader';
import * as scrollHelpers       from '../../helpers/scroll';

import './index.scss';

const styles = {
    movieColumn: {
      marginBottom: 20
    }
}

class PageMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            page: 1,
            search: this.props.match.params.search || '',
            type: this.props.match.params.search ? 'search' : 'popular'
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.onscroll = this.handleScroll;

        if (this.state.type === 'search') {
            this.props.searchMovie(this.state.search, this.state.page)
            .then(() => {
                this.setState({
                    loading: false
                });
            });
        } else {
            this.props.loadPopularMovies(this.state.page)
                .then(() => {
                    this.setState({
                        loading: false
                    });
                });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if (!this.state.loading) {
            let percentageScrolled = scrollHelpers.getScrollDownPercentage(window);
            if (percentageScrolled > .8) {
                let nextPage = this.state.page + 1;
                if (this.state.type === 'search') {
                    this.props.searchMovie(this.state.search, nextPage);
                } else {
                    this.props.loadPopularMovies(nextPage);
                }
                this.setState({page: nextPage});
            }
        }
    }

    onClick = (movie_id) => {
        let path = `/movie/${movie_id}`
        this.props.history.push(path);
    }

    render() {
        let title = this.state.type === 'search' ? 'Search Results' : 'Popular Movies';
        let movieColumns = [];
        let movies = this.state.type === 'search' ? this.props.search : this.props.movies;
        
        for(let key in movies) {
            let movieGroup = movies[key];
            
            movieGroup.map(movie => (
                movieColumns.push(<Col style={styles.movieColumn} key={movie.id} xs={6} sm={6} md={6} lg={3}>
                    <MovieCard key={movie.id} id={movie.id} img={movie.poster_path} title={movie.title} date={movie.release_date} score={movie.vote_average} onClick={this.onClick} />
                </Col>)
            ));
        }

        return(
            <div>
                <Header />
                <Container>
                    <Row className="category-title">
                        <h2>{title}</h2>
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
        movies: state.popularMovies,
        search: state.search
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        loadPopularMovies: (page) => dispatch(loadPopularMovies(page)),
        searchMovie: (query, page) => dispatch(searchMovie(query, page))
        
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageMovie));