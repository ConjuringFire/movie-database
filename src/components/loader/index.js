import React                from 'react';
import propTypes            from 'prop-types';
import _                    from 'lodash';
import { RefreshIndicator } from 'material-ui';

const styles = {
    refreshStyle: {
      position: 'relative',
      display: 'block',
      margin: '0 auto'
    }
};

class Loader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment> 
                {this.props.loading ?
                <RefreshIndicator
                    style={styles.refreshStyle}
                    top={0}
                    left={0}
                    size={80}
                    status={'loading'} 
                />
                : null}
            </React.Fragment>
        );
    }
}

Loader.propTypes = {
    loading: propTypes.bool
};

Loader.defaultProps = {
    loading: false
};

export default Loader;