class RoomItem extends React.Component {
  handleClick = e => e.preventDefault();
  
  
  render() {
    const { name } = this.props;
    
    return (
     <a className='' href="#" onClick={this.handleClick}>
        {name}
      </a>   
    );
  }
}


export default RoomItem;