import { createStore, compose, applyMiddleware } from 'redux'

const defaultState = {}

const middleware = []
const enhancer = compose(
	applyMiddleware(...middleware),
	window.devToolsExtension ? window.devToolsExtension() : f => f
)

const rootReducer = () => {}

const store = createStore(
	rootReducer,
	defaultState,
	enhancer,
)

export default store
