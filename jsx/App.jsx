import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render () {
        return <section>
            <header>
                <form>
                    <div><label><input type="text"/></label></div>
                    <div><label><input type="checkbox"/> Only show cats that like kids</label></div>
                </form>
            </header>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colSpan="2">male</th>
                    </tr>
                    <tr>
                        <td>Fidel</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Fidel</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <th colSpan="2">female</th>
                    </tr>
                    <tr>
                        <td>Yude</td>
                        <td>4</td>
                    </tr>
                </tbody>
            </table>
        </section>
    }
}

export default App;
