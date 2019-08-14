import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/functions'


class SearchBar extends Component {


  state = { isLoading: false, results: this.props.allUsers, value: '' }

  handleResultSelect = (e, { result }) => this.setState({ value: result.name })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value: e.target.value })

    setTimeout(() => {

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.name)

      this.setState({
        isLoading: false,
        results: _.filter(this.props.allUsers, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <div>
          <Search
            loading={isLoading}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            value={value}
            {...this.props}
          />
          <Divider />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { allUsers: state.users.allUsers}
}

const mapDispatchToProps = {
  fetchUsers
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
