import React from 'react'
import PropTypes from 'prop-types';

export default class Spinner extends React.Component {


    static propTypes = {
        display: PropTypes.bool
    }

    static defaultProps = {
        display: false
    }

    render() {
        return (
            <div className="spinner">
                {this.props.display &&
                    <img src="/spinner.gif" className="spinnerImage" />
                }
            </div>

        )
    }
}