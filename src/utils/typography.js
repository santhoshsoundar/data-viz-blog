import Typography from 'typography'
import gray from 'gray-percentage'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import verticalRhythm from 'compass-vertical-rhythm'
import './../styles/global.css'

let windowWidth = 1080
if (typeof document !== "undefined") {
  windowWidth = document.documentElement.clientWidth
}

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: 'PT Sans',
      styles: ['400', '400i'],
    },
    {
      name: 'PT Serif',
      styles: ['400', '400i'],
    },
  ],
  headerFontFamily: ['PT Sans', 'sans-serif'],
  bodyFontFamily: ['PT Serif', 'serif'],
  headerColor: 'hsla(0,0%,0%,0.9)',
  bodyColor: 'hsla(0,0%,0%,0.7)',
  headerWeight: 600,
  bodyWeight: 400,
  boldWeight: 500,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const linkColor = 'var(--main-mcnuttblue-color)'
    const vr = verticalRhythm({
      baseFontSize: '16px',
      baseLineHeight: '24px',
    })
    return {
      a: {
        color: linkColor,
        textShadow: 'none',
        backgroundImage: 'none',
        textDecoration: 'none',
      },
      'a:hover,a:active': {
        textShadow:
          '.03em 0 #fff,-.03em 0 #fff,0 .03em #fff,0 -.03em #fff,.06em 0 #fff,-.06em 0 #fff,.09em 0 #fff,-.09em 0 #fff,.12em 0 #fff,-.12em 0 #fff,.15em 0 #fff,-.15em 0 #fff', // eslint-disable-line
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${linkColor} 1px, ${linkColor} 2px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-line
      },
      'a.gatsby-resp-image-link, a.gatsby-resp-image-link:hover, a.gatsby-resp-image-link:active, a.icons, a.icons:hover, a.icons:active': {
        boxShadow: 'none',
        backgroundImage: 'none',
      },
      'a.cardIcons': {
        color: 'var(--main-btwogrey-color)',
      },
      'a.icons:hover, a.icons:active': {
        color: '#15c3d3',
      },
      'a.cardIcons:hover, a.cardIcons:active': {
        color: 'var(--main-mcnuttblue-color)',
      },
      'h1,h2,h3,h4,h5,h6': {
        marginTop: rhythm(1.5),
        marginBottom: rhythm(0.5),
      },
      h1: {
        fontSize: (windowWidth > 786) ? '42px' : '28px',
        fontWeight: 300,
        letterSpacing: (windowWidth > 786) ? '-2px' : '-1px',
      },
      'ul,ol': {
        marginLeft: rhythm(2 / 3),
      },
      // children ol, ul
      'li>ol,li>ul': {
        marginLeft: rhythm(2 / 3),
        marginBottom: 0,
      },
      // Blockquote styles.
      blockquote: {
        ...scale(1 / 5),
        borderLeft: `${rhythm(3 / 24)} solid ${linkColor}`,
        color: gray(41),
        paddingLeft: rhythm(13 / 16),
        fontStyle: 'italic',
        marginLeft: 0,
        marginRight: 0,
      },
      'blockquote > :last-child': {
        marginBottom: 0,
      },
      'blockquote cite': {
        ...adjustFontSizeTo(options.baseFontSize),
        color: options.bodyColor,
        fontStyle: 'normal',
        fontWeight: options.bodyWeight,
      },
      'blockquote cite:before': {
        content: '"— "',
      },
      [MOBILE_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
          fontSize: `${14 / 16 * 100}%`,
          lineHeight: 1.5,
        },
        blockquote: {
          borderLeft: `${rhythm(3 / 16)} solid ${linkColor}`,
          color: gray(41),
          paddingLeft: rhythm(9 / 16),
          fontStyle: 'italic',
          marginLeft: rhythm(-2 / 4),
          marginRight: 0,
        },
      },
    }
  },
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
