import * as posts from "../posts/*.md";
import * as pages from "../pages/*.md";

export default {
  posts: Object.values(posts),
  pages: Object.values(pages).sort(page => -page.order)
};
