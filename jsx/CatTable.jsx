import React from 'react';
import ReactDOM from 'react-dom';

class CatTable extends React.Component {
    render() {
        console.log(this.props.kitties);

        const male = this.props.kitties.filter(cat => {
            return cat.category === 'male';
        });

        const maleRows = male.map(cat => {
            return (<tr>
                <td>{cat.name}</td>
                <td>{cat.age}</td>
            </tr>);
        });

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
                <tr>
                    <td>Yude</td>
                    <td>4</td>
                </tr>
            </tbody>
        </table>);
    }
}

export default CatTable;
