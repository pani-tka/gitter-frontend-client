const RoomFetchButton = ({ fetching, error, action }) => (
  <button
    className="room-fetch-button"
    disabled={fetching} 
    onClick={action}
  >
    {fetching && 'Fetching...'} 
    {!fetching && (error ? 'Retry' : 'Fetch rooms')}
  </button>
);

export default RoomFetchButton;