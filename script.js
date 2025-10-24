import React from "https://esm.sh/react@17.0.1";
import ReactDOM from "https://esm.sh/react-dom@17.0.1";
import { marked } from "https://esm.sh/marked";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "Write Hello"
    };
  }

  handleChange = (event) => {
    this.setState({ markdown: event.target.value });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h1>Markdown</h1>
          <textarea
            onChange={this.handleChange}
            value={this.state.markdown}
            rows="12"
          ></textarea>
        </div>
        <div className="col-md-6">
          <h1>Preview</h1>
          <div
            className="preview-box"
            dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
          ></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("render-target"));
