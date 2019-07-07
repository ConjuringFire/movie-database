import React            from 'react';
import { withRouter }   from 'react-router-dom';
import { connect }      from 'react-redux';
import { loadMovie }    from '../../redux/reducers/movies';
import Loader                   from '../../components/loader';
import { Container }   from 'material-ui';
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";

import './details.scss';

class Page_MovieDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: !this.props.movies[this.props.match.params.id],
            movie_id: this.props.match.params.id
        };
    }

    componentDidMount() {
        if (!this.props.movies[this.state.movie_id]) {
            this.props.loadMovie(this.state.movie_id)
                .then(() => {
                    this.setState({
                        loading: false
                    });
                });
        }
    }

    onClick = (e) => {
        e.preventDefault();
        this.props.history.goBack();
    }

    render() {
        let moviePage;
        
        if (!this.state.loading) {
            let movie = this.props.movies[this.state.movie_id];
            let year = movie.release_date.split('-')[0];
            let votePercentage = Number(movie.vote_average/10).toLocaleString(undefined,{style: 'percent'});
            let runtimeHours = Math.floor(movie.runtime / 60);          
            var runtimeMinutes = movie.runtime % 60;
            
            moviePage = (
                <section>
                    <div>
                        <div className="poster">
                            <a href="#" className="back-link" onClick={this.onClick}><KeyboardBackspace /></a>
                            <div className="image-content">
                                <img className="backdrop" alt="" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
                                <div className="poster-holder">
                                    <img className="poster" alt="" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                                </div>
                            </div>    
                            <div className="movie-title">
                                <div className="title">
                                    <h2>{movie.title}</h2>
                                    <span>
                                        {year} - {votePercentage} User score<br />
                                        {runtimeHours}h {runtimeMinutes} min
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="movie-details">
                        <h3>Overview</h3>
                        <span className="overview">
                            {movie.overview}
                        </span>
                    </div>  
                </section>      
            );
        }

        return (
            <section>
                {moviePage}                    
                <div className="loader-holder">             
                    <Loader loading={this.state.loading} />
                </div>
            </section>
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