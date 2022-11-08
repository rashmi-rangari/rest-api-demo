import React, { Component } from 'react';
import axios from 'axios';

class GetList extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            posts : []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts') 
        .then(response => {
            this.setState({
                posts : response.data
            })
        })
    }

    render() {
        const {posts} = this.state
        return(
            <div>
                <h1>List of Posts</h1>
                {
                    posts.map(post => (
                        <div key={post.id}><h5>{post.title}</h5>{post.body}</div>))
                }
            </div>
        )
    }
}

export default GetList;