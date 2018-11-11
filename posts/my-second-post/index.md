---
title: My Second Post!
date: "2015-05-06T23:46:37.121Z"
---

Wow! I love blogging so much already.

Did you know that "despite its name, salted duck eggs can also be made from
chicken eggs, though the taste and texture will be somewhat different, and the
egg yolk will be less rich."?
([Wikipedia Link](http://en.wikipedia.org/wiki/Salted_duck_egg))

Yeah, I didn't either.

Out of the time we spent, I went through the foundational data visualization concepts that I learnt as a part of my 
graduate curriculam and later from The Visual Display of Quantitative Information, 
but I still got to learn new interesting aspects when the general principals were 
discussed over a table with people like [@sxywu]() & [@micahstubbs](). 

Some of the nugets that I would definetly apply on my upcoming visualizations are:

1) Gestalt Law of grouping applied with Enclosure highlighting chart area/channels encompasing the marks. 

2) Well defined marks and channels in a visualization layout design lets us simplify overall design process. 

3) Breaking down the D3 API into Layout calculation, DOM manipulation, Annotation and Interaction layers helps 
in building D3 apps with frameworks like React where the DOM manipulations can be handed over to react for example.


The `gatsby-source-filesystem` package allows Gatsby to use GraphQL on the images in a certain directory and make queries out of them. The two `sharp` plugins are what processes the images before you display them.

Open up your `gatsby-config.js` and add the plugins to it. I'll add them right before the existing plugins. Your file should look like this:

```html
<tag>
</tag>

```

```javascript
Object {
  top: 30
  right: 10
  bottom: 0
  left: 30
};
module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}


'use strict';

const visit = require('unist-util-visit');
const nodeToString = require('hast-util-to-string');
const refractor = require('refractor');

module.exports = options => {
  options = options || {};

        <OrdinalFrame
                data={data}
                oAccessor="SHOT_TYPE"
                rAccessor={d => Math.min(35, d.SHOT_DISTANCE)}
                summaryType={{ type: "violin", bins: 9 }}
                type={{ type: "swarm", r: 2, iterations: 250 }}
                projection="horizontal"
                style={d => ({
                    fill: d.EVENT_TYPE === "Made Shot" ? "blue" : "red",
                    stroke: "blue",
                    opacity: 0.75
                })}
                summaryStyle={{ fill: "none", stroke: "black", strokeWidth: 2 }}
                oPadding={5}
                axis={{ orient: "left" }}
                oLabel={true}
                margin={{ left: 130, bottom: 50, top: 10, right: 10 }}
                pieceHoverAnnotation={true}
        />
// damal
  return tree => {
      <html> tree</html>
    visit(tree, 'element', visitor);
  };

  function visitor(node, index, parent) {
    if (!parent || parent.tagName !== 'pre' || node.tagName !== 'code') {
      return;
    }

    const lang = getLanguage(node);

    if (lang === null) {
      return;
    }

    let result;
    try {
      parent.properties.className = (parent.properties.className || [])
        .concat('language-' + lang);
      result = refractor.highlight(nodeToString(node), lang);
    } catch (err) {
      if (options.ignoreMissing && /Unknown language/.test(err.message)) {
        return;
      }
      throw err;
    }

    node.children = result;
  }
};

function getLanguage(node) {
  const className = node.properties.className || [];

  for (const classListItem of className) {
    if (classListItem.slice(0, 9) === 'language-') {
      return classListItem.slice(9);
    }
  }

  return null;
}

```
**Important:** Make sure you specify the correct `path` to your images! The `gatsby-source-filesystem` will look in this folder to access your images. Since we're using the default starter, there's already a folder at `/src/images` so we'll use that. Get some images off of <a href="https://unsplash.com/" target="blank">Unsplash</a> and add them to that folder.

<h3 class="mt-5 mb-3">Testing An Image Query With GraphQL</h3>

With the plugins installed, we can fire up our site in dev mode.

```bash
gatsby develop
```

Navigate to `http://localhost:8000/` to see your site in dev mode. Now we'll play with the GraphiQL interface to understand how the image query works. Head to `http://localhost:8000/___graphql` to see the GraphiQL view of the site. Here we can test the different queries available to us. I've added 3 images to my `/src/images` folder and named them `one.jpg` `two.jpg` and `three.jpg`. To query for `one.jpg` I'll use this:

```graphql
query {
  imageOne: file(relativePath: {eq: "one.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        base64
        tracedSVG
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        originalImg
        originalName
      }
    }
  }
}
```





### Markdown Kitchen Sink

It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to Google!](http://google.com)

Sometimes you want numbered lists:

1. One
2. Two
3. Three

Sometimes you want bullet points:

* Start a line with a star
* Profit!

Alternatively,

- Dashes work just as well
- And if you have sub points, put two spaces before the dash or star:
  - Like this
  - And this

If you want to embed images, this is how you do it:

![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)

# Structured documents

Sometimes it's useful to have different levels of headings to structure your documents. Start lines with a `#` to create headings. Multiple `##` in a row denote smaller heading sizes.

### This is a third-tier heading

You can use one `#` all the way up to `######` six for different heading sizes.

If you'd like to quote someone, use the > character before the line:

> Coffee. The finest organic suspension ever devised... I beat the Borg with it.
> - Captain Janeway

There are many different ways to style code with GitHub's markdown. If you have inline code blocks, wrap them in backticks: `var example = true`.  If you've got a longer block of code, you can indent with four spaces:

    if (isAwesome){
      return true
    }

GitHub also supports something called code fencing, which allows for multiple lines without indentation:

```
if (isAwesome){
  return true
}
```

And if you'd like to use syntax highlighting, include the language:

```javascript
if (isAwesome){
  return true
}
```

GitHub supports many extras in Markdown that help you reference and link to people. If you ever want to direct a comment at someone, you can prefix their name with an @ symbol: Hey @kneath — love your sweater!

But I have to admit, tasks lists are my favorite:

- [x] This is a complete item
- [ ] This is an incomplete item

When you include a task list in the first comment of an Issue, you will see a helpful progress bar in your list of issues. It works in Pull Requests, too!

And, of course emoji! :sparkles: :camel: :boom:





The `gatsby-source-filesystem` package allows Gatsby to use GraphQL on the images in a certain directory and make queries out of them. The two `sharp` plugins are what processes the images before you display them.

Open up your `gatsby-config.js` and add the plugins to it. I'll add them right before the existing plugins. Your file should look like this:

```javascript
module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}

```
**Important:** Make sure you specify the correct `path` to your images! The `gatsby-source-filesystem` will look in this folder to access your images. Since we're using the default starter, there's already a folder at `/src/images` so we'll use that. Get some images off of <a href="https://unsplash.com/" target="blank">Unsplash</a> and add them to that folder.

<h3 class="mt-5 mb-3">Testing An Image Query With GraphQL</h3>

With the plugins installed, we can fire up our site in dev mode.

```bash
gatsby develop
```

Navigate to `http://localhost:8000/` to see your site in dev mode. Now we'll play with the GraphiQL interface to understand how the image query works. Head to `http://localhost:8000/___graphql` to see the GraphiQL view of the site. Here we can test the different queries available to us. I've added 3 images to my `/src/images` folder and named them `one.jpg` `two.jpg` and `three.jpg`. To query for `one.jpg` I'll use this:

```graphql
query {
  imageOne: file(relativePath: {eq: "one.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        base64
        tracedSVG
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        originalImg
        originalName
      }
    }
  }
}
```