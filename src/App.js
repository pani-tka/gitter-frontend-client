import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TokenEditor from './components/token-editor';
import RoomList, { EmptyRoomList } from './components/room-list';
import RoomFetchButton from './components/room-fetch-button';

const API_ROOMS_ENDPOINT = 'https://api.gitter.im/v1/rooms';

class App extends React.Component {
  state = {
    token: '',
    roomList: null,
    roomListFetching: false,
    roomListFetchingError: null,
  }

  changeToken = token => this.setState({ token });

  fetchRooms = () => {
    this.setState({
      roomListFetching: true,
      roomListFetchingError: null,
    });
    
    const { token } = this.state;
    
    fetch(API_ROOMS_ENDPOINT, { //URL, на который нужно сделать запрос
      headers: {                //заголовки запроса (объект)
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {  //Этот then позволяет проанализировать ответ и, если он нас устроит – вернуть промис с нужным форматом (return response.json();). 
        if (!response.ok) {
          throw Error(response.statusText); // Свойство statusText только для чтения Response  содержит сообщение о состоянии, соответствующее коду состояния (например, OKдля 200).Значение ответа в консоли
        } 

        return response.json(); //Здесь мы используем метод .json, чтобы парсить ответ как json.
      })
      .then(this.fetchRoomsSuccess) //Результат вызова .json тоже является промисом, поэтому мы должны писать then, в котором мы получим результат,но он не выполнится при ошибке, будет переброс сразу в catch
      .catch(this.fetchRoomsFailure); //Вспецификации fetch сказано, что сюда попадают только network ошибки,потому если нужно отловить обычные ошибки,то нужно сделать это в первом блоке then (throw Error(response.statusText);
  }
  
  fetchRoomsSuccess = roomList => this.setState({  //Когда данные будут извлечены успешно, они будут сохранены в локальном состоянии с помощью метода this.setState, затем render снова запустится и можно будет отобразить извлеченные данные.
    roomList,
    roomListFetching: false,
  });
//Если же промис был выполнен успешно (fulfilled), то вызывается fetchRoomsSuccess, а если во время выполнения такого промиса произошла ошибка – вызывается fetchRoomsFailure.

  fetchRoomsFailure = error => this.setState({
    roomListFetching: false,
    roomListFetchingError: error,
  });

  render() {
    const { token, roomList, roomListFetching, roomListFetchingError } = this.state;
    const hasRooms = !!roomList && roomList.length > 0;

    return (
      <div className="center">
        <TokenEditor
          token={token}
          handleChange={this.changeToken}
        />
        {hasRooms
          ? <RoomList list={roomList} />
          : <EmptyRoomList />
        }
        <RoomFetchButton
          fetching={roomListFetching}
          error={roomListFetchingError}
          action={this.fetchRooms}
        />
        {roomListFetchingError && (
          <div className="error">
            Fetch rooms failure
          </div>
        )}
    	</div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
