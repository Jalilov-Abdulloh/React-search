import React, {Component} from 'react';
class Search extends Component {
    state = {
        search: '',
    };
    handleKey = (e) => {
        if(e.key === 'Enter'){
            this.props.searchMovies(this.state.search)
        }
    };

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field ">
                        <input id="email_inline"
                               placeholder="Search"
                               type="search"
                               className="validate"
                               value={this.state.search}
                               onChange={(e) => this.setState({search: e.target.value})}
                               onKeyDown={this.handleKey}
                        />
                        <button onClick={() => this.props.searchMovies(this.state.search)} className="btn search-btn">
                            Search Movies
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}
export default Search;
