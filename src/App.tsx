import React, { useState, useMemo } from 'react'
import { Layout as HxLayout, Menu as HxMenu } from '@hydraxtrader/web-component-library'

import './App.css'

function App() {
  return (
      <div style={{width:'100%',height:'100%'}}>
         <HxLayout
              menu={<HxMenu/>}
              customHeader={<>customHeader</>}
              >
              <div style={{width:'100%',height:'100%', background:'#fff123'}}>
                content
              </div>
        </HxLayout>
      </div>
  )
}

export default App
