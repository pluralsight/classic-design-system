import PropTypes from 'prop-types'

export default WrappedComponent => {
  class ServerPropsComponent extends React.Component {
    static async getInitialProps({ pathname }) {
      return { pathname }
    }
    getChildContext() {
      return { pathname: this.props.pathname }
    }
    render() {
      return <WrappedComponent />
    }
  }
  ServerPropsComponent.childContextTypes = {
    pathname: PropTypes.string.isRequired
  }

  return ServerPropsComponent
}
