import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState( { [e.target.name]: e.target.value } )
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };

        fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then( response => response.json() )
        .then( data => console.log(data) );
    }
  render() {
    return (
      <div>
        <h1>Add post</h1>
        <form>
            <div>
                <label>Title: </label>
                <br />
                <input type='text' name='title' value={this.state.title} onChange={this.onChange} />
                
            </div>
            <br />

            <div>
                <label>Body: </label>
                <br />
                <textarea name='body' value={this.state.body} onChange={this.onChange} />
            </div>
            <br />
            <button type='submit' onClick={this.onSubmit}>submit</button>
        </form>
      </div>
    )
  }
}

export default  PostForm;