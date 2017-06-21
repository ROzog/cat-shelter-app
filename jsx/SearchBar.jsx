import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
    render() {
        console.log(this.props)
        return (<header>
            <form>
                <div><label><input type="text" value={this.props.filterText}/></label></div>
                <div><label><input type="checkbox" value="1" checked={this.props.likesKids} /> Only show cats that like kids</label></div>
            </form>
        </header>);
    }
}

export default SearchBar;
