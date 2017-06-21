import React from 'react';
import ReactDOM from 'react-dom';

class CatRow extends React.Component {
    render() {
        return <tr>
            <td>{this.props.cat.name}</td>
            <td>{this.props.cat.age}</td>
        </tr>
    }
}

export default CatRow;
