[![Netlify Status](https://api.netlify.com/api/v1/badges/1c6dc027-9ff6-4e0f-ad19-b4cdf1316661/deploy-status)](https://app.netlify.com/sites/serene-austin-346756/deploys)

# [SanthoshSoundar.blog](https://santhoshsoundar.blog/)
This is my over-engineered Data Visualization blog built with Gatsby.js, an amazing react.js based site generator that managed to blow me away, coming from Jekyll counterpart. 

There has always been a lack of solid blogging engines for the data viz community, eg. [Adam Pearce](https://twitter.com/adamrpearce) built his own [blogging engine to write & visualize](https://roadtolarissa.com/literate-blogging/).

I saw ways to maintain data viz profile with [bl.ocks](https://bl.ocks.org/)/[BlockBuilder](https://blockbuilder.org/search) or [Observable](https://beta.observablehq.com/), but then I like a bit more customization and Gatsby came to my rescue with MDX support that took shape as a powerful stack to publish d3+react.js based contents within blog posts. 

## Gatsby
At the core of this blog is [Gatsby](https://next.gatsbyjs.org/), as described at its home, it enables building blazing fast sites with react and introduces a ton of features like:
- Progressive image loading ie. lazy loading images with medium.com like [blurred up image rendering](https://codebushi.com/using-gatsby-image/) with the help of [GraphQL](https://graphql.org/) that is baked in gatsby for content fetching.
- Typography.js, allows site wide font styling/scaling and layout setting 
- Syntax highlighting with [rehype-prism](https://github.com/mapbox/rehype-prism/blob/master/index.js) edited to match [Observable](https://beta.observablehq.com/) code theme. 


## MDX
This was not possible without this amazing project - [MDX](https://mdxjs.com/) that lets blogging engine to include react components with-in the post.md files by extending them to post.mdx that could hold have react magic. Special thanks to [ChristopherBiscardi](https://github.com/ChristopherBiscardi) who made MDX possible and for responding to my integration issues along with [silvenon](https://github.com/silvenon) who was a reference point for MDX+Gatsby over-engineering madness. 
