import React from 'react'
import ReactDOM from 'react-dom'
import { Title, Link, Meta } from 'react-head'

function Example() {
  return (
    <div className="container">
      <Title>Около кальяна</Title>
      <Link rel="canonical" content="http://jeremygayed.com/" />
      <Meta name="example" content="whatever" />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Example Component</div>

            <div className="card-body">I'm an example component!</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Example
