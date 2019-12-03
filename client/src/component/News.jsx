import React, { Component } from 'react';
import axios from 'axios'
class News extends Component {

    state = {
        title: '',
        article_url: '',
        articles: []
    }

    componentDidMount = async () => {
        const allNewss = await axios.get(`/api/v1/news/${this.props.match.params.newsId}`)
        this.setState(allNewss.data)
        console.log(allNewss.data)
    }

    render() {
        return (
            <div >
                <h3>News: {this.state.title}</h3>
                <h3>{this.state.article_url}</h3>
            </div>
        )
    }
}
export default News;