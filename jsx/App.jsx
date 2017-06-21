import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './SearchBar.jsx';
import CatTable from './CatTable.jsx';

class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            filterText: 'ddd',
            likesKids: true
        }
    }

    render () {
        return (<section>
            <SearchBar filterText={this.state.filterText} likesKids={this.state.likesKids} />
            <CatTable kitties={this.props.kitties}/>
        </section>)
    }
}

export default App;
