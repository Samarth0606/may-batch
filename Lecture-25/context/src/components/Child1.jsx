import React from 'react'
import Child2 from './Child2'

function Child1({students}) {
  return (
    <div>
        <h1>Hello from child 1</h1>
        <Child2  students={students} />
    </div>
  )
}

export default Child1