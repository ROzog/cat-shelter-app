import React from 'react';
import ReactDOM from 'react-dom';

class CatCategoryRow extends React.Component {
    render() {
        return (<tr>
            <th colSpan="2">{this.props.category}</th>
        </tr>);
    }
}

export default CatCategoryRow;
