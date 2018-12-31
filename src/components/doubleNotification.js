import React from 'react';

export class DoubleNotification extends React.Component {
    render() {
        if (this.props.double) {
            return (
                <div>
                    <div>This movie is already in favourites</div>
                </div>
            )
        } else {
            return (
                <div>
                    <div>not in favs</div>
                </div>
            )
        }

    }
}