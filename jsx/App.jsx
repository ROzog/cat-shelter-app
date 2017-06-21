import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './SearchBar.jsx';
import CatTable from './CatTable.jsx';

class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            filterText: '',
            likesKids: false
        }
    }

    handleTextChange = event => {
        this.setState({
            filterText: event.target.value,
        });
    }

    handleCheckboxChange = event => {
        this.setState({
            likesKids: event.target.checked,
        });
    }

    render () {
        return (<section>
            <SearchBar onTextChange={this.handleTextChange} onCheckboxChange={this.handleCheckboxChange} filterText={this.state.filterText} likesKids={this.state.likesKids} />
            <CatTable kitties={this.props.kitties}/>
        </section>)
    }
}

export default App;
