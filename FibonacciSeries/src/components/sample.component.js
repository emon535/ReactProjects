import React, { Component } from 'react';
import SampleService from '../services/sample.service';
import "./sampleStyle.css"; 

class SampleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentWillMount() {
        SampleService.getPosts()
            .then(posts => {
                this.setState({ posts });
            })
            .catch(() => {
                throw new Error("Error fetching posts");
            });
    }

    render() {
        return (
            <div id="main_content">
                <h3 id= "heading">Posts</h3>
                   
                <ul>
                    {
                        this.state.posts.map(post => {
                            return (
                            <div id="text_content">
                                <img src ="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png" />
                                <lu key={post.id}>
                                    <p>{post.title}</p>
                                    <small>{post.body}</small>
                                </lu>


                            </div>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default SampleComponent;