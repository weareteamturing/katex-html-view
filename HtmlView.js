import React from 'react'
import styled from 'styled-components'

import './html-view.css'
// @TODO add html-view script (choice relayout)

const HtmlViewBox = styled.div`
  font-size: 0;
  border: 0.5px solid gray;
  position: relative;
  display: inline-block;
  vertical-align: top;
  overflow: auto;
`

export default function HtmlView({ renderedHtml = '', style }) {
  if (!renderedHtml) {
    return null
  }
  return <HtmlViewBox style={style} dangerouslySetInnerHTML={{ __html: renderedHtml }} />
}
