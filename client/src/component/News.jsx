import React, { Component } from 'react';
import axios from 'axios'
class News extends React.Component {

    state = {
        articles: [],
    }

    componentDidMount() {
        fetch(' http://site.api.espn.com/apis/site/v2/sports/basketball/nba/news')
            .then(results => {
                return results.json();
            })
            .then(data => {
                const articles = this.state.data.results.map((article) => {
                    return (
                        <div key={article.results}>

                        </div>
                    )
                })
                this.setState({ articles: articles })
                console.log("state", this.state.articles);
            })
        // axios.get(`/api/news`)
        //     .then(response => response.json())
        //     .then(json => this.setState({ news: json.data, done: true }))
    }


    render() {
        return (
            <div className="container2">
                <div className="container1">
                    News: {this.state.articles}
                </div>
            </div>
        )
    }
}

export default News;