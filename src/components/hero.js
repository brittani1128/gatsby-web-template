import React from "react"
import styled from "@emotion/styled"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  background-image: url("/images/annie-spratt-zu.jpg");
  background-position: top 50% center;
  background-size: cover;
  height: 50vh;
  margin-top: 0;
`

const TextBox = styled("div")`
  background-image: linear-gradient(to top, #a6a6a6dd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 960px) / 2) 2rem;
  width: 100%;
  margin-top: 0;
  text-align: right;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }
  a {
    margin-top: 0.5rem;
  }
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "annie-spratt-zu.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid}>
      <TextBox>
        <h1>Hi people</h1>
        <p>This is a practice site for testing out all things Gatsby</p>
      </TextBox>
    </ImageBackground>
  )
}

export default Hero
