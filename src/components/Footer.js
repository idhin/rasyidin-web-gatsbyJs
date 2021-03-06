import React, { Component } from 'react'
import { Link } from 'gatsby'
import facebook from '../../content/thumbnails/facebook.png'
import gatsby from '../../content/thumbnails/gatsby.png'
import instagram from '../../content/thumbnails/instagram.png'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
          <a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">
            Build with Gatsby JS + AWS Amplify
          </a>
        </div>
        <div>
          <a href="https://instagram.com/khulafaurrr" title="Instagram">
            <img
              src={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="Instagram"
            />
          </a>
          <a href="https://gatsbyjs.org" title="By Gatsby JS">
            <img
              src={gatsby}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="Gatsby JS"
            />
          </a>
        </div>
      </footer>
    )
  }
}
