import React from 'react'
import Child4 from './Child4'

function Child3({students}) {
  return (
    <div>
        <h1>Child3</h1>
        <Child4 students={students} />
    </div>
  )
}

export default Child3