import React from 'react';

export class DoubleNotification extends React.Component {
    render() {
        {/*return(
            <div>Double hey hey</div>
        );*/}

        if (this.props.double) {
            return (
                <div>This movie is already in favourites</div>
            )
        } else {
            return (
                <div>Added to favourites</div>
            )
        }

    }
}