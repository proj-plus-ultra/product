import React from 'react'
import App from '../client/src/App.jsx'
import {shallow} from 'enzyme'
import axios from 'axios'





describe('App Component', ()=> {
  it('renders App', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toExist()
  })
})

describe('App Component', ()=> {
  it('starts with Pic 1', () => {
    const wrapper = shallow(<App />)
    const whichPic = wrapper.state().whichPic
    expect(whichPic).toEqual(1)
  })
})

describe('App Component', ()=> {
  it('item is a single object', () => {
    const wrapper = shallow(<App />)
    const item = wrapper.state().item
    expect(item).toEqual({})
  })
})

//need to do a mock
// describe(`App Component`, ()=> {
//   it(`getItems receives multiple items`, () => {
//     const wrapper = shallow(<App />)
//     const items = wrapper.state().items.length
//     expect(items).toBeGreaterThan(0)
//   })
// })




