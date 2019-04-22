import * as posts from '../posts/*.md'
import * as pages from '../pages/*.md'

export default {
  posts: Object.values(posts).sort(post => -new Date(post.date)),
  pages: Object.values(pages).sort((a, b) => a.order - b.order)
}
