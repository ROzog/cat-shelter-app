import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './SearchBar.jsx';
import CatTable from './CatTable.jsx';

class App extends React.Component {
    render () {
        return (<section>
            <SearchBar/>
            <CatTable kitties={this.props.kitties}/>
        </section>)
    }
}

export default App;
