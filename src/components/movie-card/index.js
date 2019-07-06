import React                            from 'react';
import propTypes                        from 'prop-types';

import { Card, CardMedia }   from 'material-ui';
import './movie-card.scss';

const styles = {
    cardMedia: {
        maxHeight: 400,
        overflow: 'hidden'
    },
    card: {
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'relative'
    }
  };

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick = () => {
        this.props.onClick(this.props.id);
    }

    render() {
        let votePercentage = Number(this.props.score/10).toLocaleString(undefined,{style: 'percent'});

        return(
            <React.Fragment>
                <Card style={styles.card} onClick={this.onClick}>
                    <div className="score">{votePercentage}</div>
                    <CardMedia style={styles.cardMedia}>
                        <img alt="" src={`https://image.tmdb.org/t/p/original/${this.props.img}`} />
                    </CardMedia>
                </Card>
                <div>
                    <div className="title-text">{this.props.title}</div>
                    <div className="title-date">{this.props.date}</div>
                </div>
            </React.Fragment>
        );
    }
}

MovieCard.propTypes = {
    id      : propTypes.number,
    img     : propTypes.string,
    title   : propTypes.string,
    date    : propTypes.string,   
    score   : propTypes.number,
    onClick : propTypes.func
};

export default MovieCard;