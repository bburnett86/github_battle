var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  //Allows you to pass items to your components without going through prompts
  //DO NOT USE OUTSIDE OF ROUTER
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  // Manages State
  getInitialState: function(){
    return {
      username: ''
    }
  },
  handleUpdateUser: function(e){
    this.setState({
      // Updates this.state.username using the value of the input field when this function is run
      username: e.target.value
    })
  },
  handleSubmitUser: function(e){
    e.preventDefault();
    // Saves previous Username to playerOne or playerTwo object
    var username = this.state.username;
    // Resets the state
    this.setState({
      username: ''
    })

    // Manages Routes
    if (this.props.routeParams.playerOne) {
      //If playerOne as a route param is true
      //Go To Battle
      this.context.router.push({
        //Passing Information along to Battle Route
        //Using saved info on PlayerOne and the current username for PlayerTwo
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      //Go To Player Two
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  render: function(){
    return(
      //Only Renders UI of Prompt Component
      <Prompt
      onSubmitUser = {this.handleSubmitUser}
      onUpdateUser = {this.handleUpdateUser}
      header = {this.props.route.header}
      username = {this.state.username} />
    )
  }
});

module.exports =PromptContainer;