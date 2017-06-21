import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
    render() {
        return (<header>
            <form>
                <div><label><input type="text"/></label></div>
                <div><label><input type="checkbox"/> Only show cats that like kids</label></div>
            </form>
        </header>);
    }
}

export default SearchBar;
