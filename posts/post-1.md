title: "My First Post"
tags: blogging,framework
date: 2019-04-14T00:38:29Z
header: "https://d1u0z01nzsqzn7.cloudfront.net/images/buddhaz.jpg" # Replace this with a new image

----Content Below This Line----
Why BuddhaBlog is dope:

- `$ yarn post "<post title>" "<tag1>" "<tag2>" ...` will generate a post file with today's date, the given title, and any tags passed afterwards.  You can also skip this and run `$ yarn post` and enter the title and tags yourself?!
- Everything under "---" in the post file is your content. Use markdown, it will be translated into styled HTML when its time to push your new update.
- `$ yarn build` compiles all posts and JS into static assets. After running `yarn build` you can push up to Github to update your site with your new posts.
- Customize additional content and site layout by changing the NavigationBar and Main.js to add routes, e.g. a `/portfolio` route and page, with links to your work.