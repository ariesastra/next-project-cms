// Dependencies
import {createRef, useEffect} from 'react'
import Highlight from 'highlight.js'
import {findDOMNode} from 'react-dom'

const HighlightCode = ({children, language}) => {
  const code = createRef()

  useEffect(() => {
    Highlight.highlightBlock(findDOMNode(code.current))
  }, [code])

  return (
    <pre>
      <code 
        ref={code}
        className={language}
      >
        {children}
      </code>
    </pre>
  )
}

export default HighlightCode