import React                    from 'react';
import { connect }              from 'react-redux';
import {Container, Row, Col}    from 'react-bootstrap';
import { AppBar }               from 'material-ui';
import { loadPopularMovies }    from '../../redux/reducers/popularMovies';
import MovieCard                from '../../components/movie-card';

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

    render() {
        let movies = [];

        if (this.props.movies) {
            for (let key in this.props.movies[this.state.page]) {
                let movie = this.props.movies[this.state.page][key];
                console.log(movie.poster_path);
                movies.push(<MovieCard key={movie.id} img={movie.poster_path} />);
            }

            /*console.log(this.props.movies);
            this.props.movies.map((movie) => console.log(movie));
            this.props.movies.map((movie) => movies.push(<MovieCard key={movie.id} img={movie.poster_path} />));*/
        }

        console.log(movies);

        return(
            <div>
                <AppBar title="Movies" />
                <Container>
                    <Row>
                        <p>TODO: Search bar</p>
                    </Row>
                    <Row>
                        {movies}
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

export default connect(mapStateToProps, mapDispatchToProps)(Page_Movie);

// import { withRouter }   from 'react-router';
// import { connect }      from 'react-redux';
// import { loadPopularMovies }   from '../../redux/reducers/movies';


// class Page_Movie extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     componentDidMount() {
//         this.props.loadPopularMovies();
//     }

//     render() {
//         console.log(this.props.movies);

//         let movies = [];

//         for (let key in this.props.movies) {
//             movies.push(<li>{this.props.movies[key].title}</li>);
//         }

//         return(
//             <div>
//                 {movies}
//             </div>
//         );
//     }
// }

// const mapStateToProps = function(state) {
//     return {
//         movies: state.movies
//     };
// };

// const mapDispatchToProps = function(dispatch) {
//     return {
//         loadPopularMovies: (page) => dispatch(loadPopularMovies(page))
//     };
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page_Movie));