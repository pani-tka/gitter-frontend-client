class TokenEditor extends React.Component {
  state = {
    error: null,
  }

  handleChange = e => {
    const token = e.target.value;
    
    if (token === '') {
      this.setState({ error: 'Specify the token' });
    } else {
      this.setState({ error: null });
    }

    const { handleChange } = this.props;
    
    handleChange(token);
  }

  render() {
    const { token } = this.props;

    return (
      <div className="token-editor-container">
        <label>
          Token:
        </label>
        <input
          className="token-input"
          type="password"
          placeholder=" Enter your token"
          value={token}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TokenEditor;