import 'react-block-ui/style.css'
import React from 'react'
import ReduxBlockUi from 'react-block-ui/redux'

const UiBlock = () => (
  <div>
    <style>{`
      .block-ui {
        position: absolute;
        min-height: 0;
      }
      .block-ui-container {
        position: fixed;
        width: 100%;
        z-index:9999;
      }
      .block-ui-message-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 250px;
        height: 100px;
      }
      .block-ui-overlay {
        opacity: 0.7;
        filter: alpha(opacity=70)
      }
    `}</style>
    <ReduxBlockUi
      message='Loading, please wait'
      tag='div'
      block={/[\w/]+_REQUEST/}
      unblock={/[\w/]+_FULFILL/} />
  </div>
)

export default UiBlock
