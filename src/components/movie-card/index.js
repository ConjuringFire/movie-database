import React                            from 'react';
import propTypes                        from 'prop-types';
import { Card, CardTitle, CardMedia }   from 'material-ui';


class MovieCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Card>
                <CardMedia>
                    <img alt="" src={`https://image.tmdb.org/t/p/original/${this.props.img}`} />
                </CardMedia>
            </Card>
        );
    }
}

MovieCard.propTypes = {
    img  : propTypes.string
};

export default MovieCard;