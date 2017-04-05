var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

// Functional Stateless Components
// Instead of creating an entire class here, we're using a function because the component is only rendering UI
function Prompt (props){
  return(
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className = "col-sm-12">
        <form onSubmit = {props.onSubmitUser} >
          <div className = "form-group">
            <input
              className = "form-control"
              placeholder = "Github Username"
              onChange = {props.onUpdateUser}
              value = {props.username}
              type = "text" />
          </div>
          <div className = "form-group col-sm-4 col-offset-4">
            <button
              className = "btn btn-block btn-success"
              type = "submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// Here we add PropTypes to the function
Prompt.PropTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = Prompt;