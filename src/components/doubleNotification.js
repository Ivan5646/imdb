import React from 'react';

export class DoubleNotification extends React.Component {
    render() {
        if (this.props.double) {
            return (
                <div>
                    <div>In favourites</div>
                </div>
            )
        } else {
            return (
                <div>
                    <div>Add to favourites</div>
                </div>
            )
        }

    }
}