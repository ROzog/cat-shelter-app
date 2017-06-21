import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {

    render() {
        return (<header>
            <form>
                <div><label><input type="text" onChange={this.props.onTextChange} value={this.props.filterText}/></label></div>
                <div><label><input type="checkbox" onChange={this.props.onCheckboxChange} value="1" checked={this.props.likesKids} /> Only show cats that like kids</label></div>
            </form>
        </header>);
    }
}

export default SearchBar;
