import React, { Component } from 'react'
import SearchBox from './SearchBox'
import CardList from './CardList'
import 'tachyons'
import  './App.css'
import Scroll from './Scroll'

export default class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             robots: [],
             searchfield: '',
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(x=>x.json())
        .then(x=>this.setState({robots:x}, console.log('ok')))
    }
    
    onSearch = (event) => {
        this.setState({searchfield:event.target.value})
    }

    render() {
        const filteredCats = this.state.robots.filter(
            (robots) => {return robots.name.toLowerCase().includes(
                this.state.searchfield.toLowerCase()
            )}
        )

    return !this.state.robots.length ?
    
            <div className='tc' >
                <h1>Cat Friends</h1>
                <SearchBox onSearch={this.onSearch} />
                <br/>
                <br/>
                <br/>
                <h1>Loading...</h1>
            </div>
        :
            <div className='tc' >
                <h1 className='ma4' >Cat Friends</h1>
                <SearchBox onSearch={this.onSearch} />
                <Scroll>
                    <CardList  robots={filteredCats} />
                </Scroll >
            </div>
        
    }
}
