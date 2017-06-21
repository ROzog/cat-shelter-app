import React from 'react';
import ReactDOM from 'react-dom';

import CatRow from './CatRow.jsx';

class CatTable extends React.Component {

    getRows(category) {
        const items = this.props.kitties.filter(cat => {
            return cat.category === category;
        });

        const rows = items.map(cat => {
            return <CatRow key={cat.name} cat={cat}/>;
        });

        return rows;
    }

    render() {
        console.log(this.props.kitties);

        const maleRows = this.getRows('male');
        const femaleRows = this.getRows('female');

        return (<table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {maleRows}
                <tr>
                    <th colSpan="2">female</th>
                </tr>
                {femaleRows}
            </tbody>
        </table>);
    }
}

export default CatTable;
