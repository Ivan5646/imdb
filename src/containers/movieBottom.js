import React from 'react';

export class MovieBottom extends React.Component {
    render() {
        return (
            <div>
                <div className="genres">
                    {
                        this.renderGenres(this.genresArray, movie.genre_ids).map(genre => {
                            return (
                                <div>{genre}</div>
                            )
                        })
                    }
                </div>
                <button onClick={() => {this.addToFavourites({
                    id: movie.id,
                    title: movie.title,
                    img: `${this.dbLink}${movie.poster_path}`
                })}}>
                    Add to Favourites
                </button>
                <DoubleNotification double={
                    this.props.favourites.find((fav) => {return fav.title === movie.title})
                }
                >
                </DoubleNotification>
            </div>
        )
    }
}