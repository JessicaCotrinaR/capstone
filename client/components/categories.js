import React from 'react'
import {connect} from 'react-redux'
import {fetchCategories} from '../store/categories'

class Categories extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>Categories</h1>
        <div>
          {this.props.categories.map((category) => {
            ;<div key={category.id}>
              <h4>{category.name}</h4>
            </div>
          })}
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    categories: state.categories,
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
  }
}

export default connect(mapState, mapDispatch)(Categories)
