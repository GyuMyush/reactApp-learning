import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
            this.state = {
            data: [
                {id: 1, name: 'john a.', salary: 44444, increase: false},
                {id: 2, name: 'john b.', salary: 444, increase: false},
                {id: 3, name: 'john c.', salary: 64674, increase: false},
                {id: 4, name: 'john d.', salary: 4444466444, increase: false}
            ]
        }

        this.lastNumbr = 5;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            //const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];
            return {
                data: data.filter(item => item.id !== id)
                //data: newArr
            }
        })
    }
    // метод добавления в "data"
    addItem = (name, salary, e) => {
        e.preventDefault()
        this.setState(({data}) => {
            let newData = data;
            newData.push({id:this.lastNumbr,
                        name: name,
                        salary: salary,
                        increase: false});

            return (
                {data: newData}
            )
        })
        this.lastNumbr++;
    }
    
    render () {
        return (
            <div className="app">
                <AppInfo/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm addItem={this.addItem}/>

            </div>
        );
    }
}

export default App;