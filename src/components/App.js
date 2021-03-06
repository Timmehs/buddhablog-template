/**
 * This component:
 *   - Adds initial meta content for the site via Helmet
 *   - Adds hot module reloading to the app
 *   - Passes store data into the top-level Layout component
 */
import React from 'react'
import { hot } from 'react-hot-loader/root'
import Layout from './Layout'
import store from '../store'
import Seo from './Seo'

const { posts, pages } = store

const App = () => (
  <div>
    <Seo
      title="BuddhaBlog Template"
      description="A static blog site generated by BuddhaBlog"
    />
    <Layout pages={pages} posts={posts} />
  </div>
)

export default hot(App)
