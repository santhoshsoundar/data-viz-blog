# [SanthoshSoundar.blog](https://santhoshsoundar.blog/)
This is my over-engineered Data Visualization blog built with Gatsby.js, an amazing react.js based site generator that managed to blow me away coming from Jekyll counterparts. 

There has always been a lack of solid blogging engines for the data viz community, eg. [Adam Pearce](https://twitter.com/adamrpearce) built his own [blogging engine to write and visualize](https://roadtolarissa.com/literate-blogging/).

I saw ways to maintain data viz profile with [bl.ocks](https://bl.ocks.org/)/[BlockBuilder](https://blockbuilder.org/search) or [Observable](https://beta.observablehq.com/), but I wanted something more & Gatsby came to my rescue & with MDX support this took shape as a powerful medium to publish d3+react.js based contents on the blog posts. 

## Gatsby
At the core of this blog is [Gatsby](https://next.gatsbyjs.org/), as described, it allows building blazing fast sites sites with react and introduces a ton of features like progressive image loading ie. lazy loading images with medium.com like [blurred up image rendering](https://codebushi.com/using-gatsby-image/) with the help of [GraphQL](https://graphql.org/) that is baked in gatsby for content fetching. 

## MDX
This was not possible without this amazing project - [MDX](https://mdxjs.com/) that lets blogging engine to include react components with-in the post.md files by extending them to post.mdx that could hold have react magic. Special thanks to [ChristopherBiscardi](https://github.com/ChristopherBiscardi) who made MDX possible and for responding to my integration issues along with [silvenon](https://github.com/silvenon) who was a reference point for MDX+Gatsby over-engineering madness. 
