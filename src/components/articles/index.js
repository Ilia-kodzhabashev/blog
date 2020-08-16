import React, { Component } from 'react'
import styles from "./index.module.css"

class Articles extends Component {
    constructor(props) {
        super(props)

        this.state = {
            articles: []
        }
    }

    getArticles = async () => {
        const promise = await fetch('http://localhost:9999/api/articles')
        const articles = await promise.json()
        this.setState({
            articles
        })

    }


    renderArticles() {
        const { articles } = this.state
        return articles.map((articles, index) => {
            return (
                <Articles key={articles._id} index={index} {...articles} />
            )
        }

        )
    }
    componentDidMount() {
        this.getArticles()
    }

    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>hello</h1>
                <div className={styles['articles-wrapper']}>{this.renderArticles()}
                </div>
            </div>
        )
    }
}

export default Articles;