// function importAll(r) {
//   let images = {}
//   r.keys().map((item, index) => {
//     images[item.replace('./', '')] = r(item)
//   })
//   return images
// }

// const menuImg = importAll(
//   require.context('./assets/menu-images/', false, /\.(png|jpe?g|svg)$/)
// )

// let data = [
//   { name: 'A Day with Shirley Wu', company: '2018', img: 'thumb_shirley.png' },
//   {
//     name: 'BayD3 meetup @Google: Semiotic.js',
//     company: '2018',
//     img: 'thumb_semiotic.png',
//   },
//   {
//     name: 'Kepler Map',
//     company: '2018',
//     img: 'thumb_kepler.png',
//   },
//   {
//     name: 'Reusable Module In Action',
//     company: '2018',
//     img: 'thumb_reusable.png',
//   },

//   {
//     name: 'Live Map of SFMuni Bus Service',
//     company: '2017',
//     img: 'thumb_sf_muni.png',
//   },
//   {
//     name: 'Dashboard with Crossfilter & DC',
//     company: '2017',
//     img: 'thumb_magneto.png',
//   },
//   {
//     name: 'Critique of Expenditure Dashboard',
//     company: '2017',
//     img: 'thumb_exp_dashboard.png',
//   },
//   { name: 'Chernoff Faces', company: '2016', img: 'thumb_faces.png' },
//   {
//     name: 'Birth of Parallel Co-ordinates',
//     company: '2016',
//     img: 'thumb_parallel.png',
//   },
//   {
//     name: 'Critique of Precinct Level Map',
//     company: '2016',
//     img: 'thumb_precinct.png',
//   },
//   {
//     name: 'Airport Evolution - Temporal Viz with Animation',
//     company: '2015',
//     img: 'thumb_airport_bar.png',
//   },
//   {
//     name: 'Bubble version of Airport Evolution',
//     company: '2015',
//     img: 'thumb_airport_bubble.png',
//   },
//   {
//     name: 'Exploring Visual Perception',
//     company: '2015',
//     img: 'thumb_power_law.png',
//   },
//   {
//     name: 'College Majors Outcome Analysis',
//     company: '2015',
//     img: 'thumb_college_majors.png',
//   },
//   { name: 'Neo4j Friends Map', company: '2015', img: 'thumb_neofj.png' },
// ]

// import React from 'react'
// import profilePic from './profile-pic.jpg'
// import { rhythm } from '../utils/typography'

// class Bio extends React.Component {
//   render() {
//     return (
//       <div
//         style={{
//           display: 'flex',
//           marginBottom: rhythm(2.5),
//         }}
//       >
//         <img
//           src={profilePic}
//           alt={`Kyle Mathews`}
//           style={{
//             marginRight: rhythm(1 / 2),
//             marginBottom: 0,
//             width: rhythm(2),
//             height: rhythm(2),
//           }}
//         />
//         <p>
//           Written by <strong>Kyle Mathews</strong> who lives and works in San
//           Francisco building useful things.{' '}
//           <a href="https://twitter.com/kylemathews">
//             You should follow him on Twitter
//           </a>
//         </p>
//       </div>
//     )
//   }
// }

// export default Bio

// blogpost>>>>>
// export const squareImage = graphql`
//   fragment squareImage on File {
//     childImageSharp {
//       sizes(maxWidth: 800) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//   }
// `
// export const squareImage = graphql`
//   fragment squareImage on File {
//     childImageSharp {
//       fluid(maxWidth: 200, maxHeight: 200) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `
