import React from 'react'
import { connect } from 'react-redux'

class ComponentB extends React.Component {
	render() {
		return (
			<div>
				<p>Unimportant</p>
			</div>
		)
	}
}

// export default ComponentB
export default connect()(ComponentB)
