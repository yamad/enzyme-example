import React from 'react'
import { Provider } from 'react-redux'
import sinon from 'sinon'
import { shallow } from 'enzyme'

import ComponentA from './ComponentA'


import configureStore from 'redux-mock-store'

describe('(Component) ComponentA', () => {
	const dispatch = sinon.spy()
	const mockStore = configureStore()
	const initialState = {
		dispatch,
		foo: 'bar',
	}
	let store, container

	beforeEach(() => {
        store = mockStore(initialState)
        container = shallow(<ComponentA store={store} /> )
	})

	it('should see ComponentB', () => {
		expect(container.find('ComponentB').length).toEqual(1)
		// expect(container.prop('foo')).toEqual(initialState.foo)
	})
})
