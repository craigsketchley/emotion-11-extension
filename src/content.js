import React from 'react'
import ReactDOM from 'react-dom'

import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import styled from '@emotion/styled'

const EMOTION_PREFIX = 'emotion-extension'

// Create and insert a unique element to mount our react app
const extensionRoot = document.createElement(`${EMOTION_PREFIX}-root`)
document.body.insertBefore(extensionRoot, document.body.firstChild)

console.log('Emotion browser extension content script loaded!')

const FloatyDiv = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
  height: 50px;
  width: 50px;
  z-index: 999999999;
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 25px;
  background: seagreen;
  box-shadow: 6px 6px 6px 0 rgba(0,0,0,0.1);
`

const Paragraph = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  color: white;
`

ReactDOM.render(
  <CacheProvider
    value={createCache({
      key: EMOTION_PREFIX
    })}
  >
    <FloatyDiv>
      <Paragraph>?</Paragraph>
    </FloatyDiv>
  </CacheProvider>,
  extensionRoot
)