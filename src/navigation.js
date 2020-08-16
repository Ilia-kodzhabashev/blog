import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

import Home from './pages/home'
import AboutMe from './pages/about-me'
import Blog from './pages/blog'
import Creativity from './pages/creativity'
import ContactUs from './pages/contact-us'
const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about me" component={AboutMe} />
                <Route path='/blog' component={Blog} />
                <Route path='/creativity' component={Creativity} />
                <Route path='/contact us' component={ContactUs} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation