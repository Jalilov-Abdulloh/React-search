import React from 'react';

function Movie(props) {
    const {Poster, Title, Year, imdbID, Type,} = props;
    return (
        <div className="cards movie" key={imdbID}>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={Poster}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{Title}<i
                        className="material-icons right">{Type}</i></span>
                    <p>{Year} <span className="right"></span></p>
                </div>

            </div>
        </div>
    );
}

export default Movie;