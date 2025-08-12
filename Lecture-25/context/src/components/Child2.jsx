import React from 'react'
import Child3 from './Child3'

function Child2({students}) {
  return (
    <div>
        <h1>Child2</h1>
        <Child3 students={students} />
    </div>
  )
}

export default Child2