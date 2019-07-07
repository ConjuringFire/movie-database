import React                    from 'react';
import { withRouter }           from 'react-router-dom';
import { Container, Row }  from 'react-bootstrap';
import SearchIcon               from "@material-ui/icons/Search";
import Media                    from 'react-media';

import './index.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: this.props.match.params.search || ''
        };
    }

    keyPress = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

        if (e.keyCode === 13) {
            this.search();
        } 
    }

    search() {
        let path = '/';

        if (this.state.search && this.state.search !== '') {
            path = `/search/${this.state.search}`
        }

        this.props.history.push(path); 
    }

    submitSearch = () => {
        this.search();
    }

    render() {
        return(
            <Container>
                <Row>
                <Media query="(max-width: 599px)">
                    {matches =>
                    matches ? (
                        <a href="/"><img className="banner" alt="The Movie Database" src={process.env.PUBLIC_URL + "/img/tmdb-logo.png"} /></a>
                    ) : (
                        <a href="/"><img className="main-banner" alt="The Movie Database" src={process.env.PUBLIC_URL + "/img/tmdb-small.svg"} /></a>
                    )}
                </Media>
                </Row>
                <Row>
                    <div className="input-group">
                        <input type="text" className="search-bar" placeholder="Search" name="search" defaultValue={this.state.search}  onKeyUp={this.keyPress} />
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-default" onClick={this.submitSearch}>
                                <SearchIcon />
                            </button>
                        </div>
                    </div>
                </Row>
            </Container>            
        );
    }
}

export default withRouter(Header);