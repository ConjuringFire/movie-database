import React                from 'react';
import propTypes            from 'prop-types';
import classNames           from 'classnames';
import moment               from 'moment';
import { Card, CardMedia }  from 'material-ui';

import './movie-card.scss';

const styles = {
    cardMedia: {
        maxHeight: 400,
        overflow: 'hidden'
    },
    card: {
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: 'transparent',
        borderRadius: '10px'
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
        let date = moment(this.props.date, 'YYYY-MM-DD').format('MMMM YYYY');

        let scoreClass = classNames({
            good: this.props.score >= 7,
            average: this.props.score < 7 && this.props.score > 3,
            bad: this.props.score < 3
        });

        return(
            <React.Fragment>
                <Card style={styles.card} onClick={this.onClick}>
                    <div className={scoreClass + " score"}>{votePercentage}</div>
                    <CardMedia style={styles.cardMedia}>
                        <img alt="" src={`https://image.tmdb.org/t/p/original/${this.props.img}`} />
                    </CardMedia>
                </Card>
                <div>
                    <div className="title-text">{this.props.title}</div>
                    <div className="title-date">{date}</div>
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