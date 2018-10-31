import React, { Component } from 'react';
import styles from './App.module.scss';
import RoomList, { EmptyRoomList } from './components/room-list';
import RoomFetchButton from './components/room-fetch-button';
import UserFetchButton from './components/user-fetch-button';
import UserCard, { EmptyUserCard } from './components/user-card';

import Wrapper from './components/wrapper';
import Authorization from './components/authorization';
import MainLayout from './components/main-layout';

const API_ROOMS_ENDPOINT = 'https://api.gitter.im/v1/rooms';
const API_USER_ENDPOINT = 'https://api.gitter.im/v1/user';

class App extends Component {
  state = {
    tokenField: '', // value for authorization component
    tokenVerificationError: null,
    verifiedToken: '',

    roomList: null,
    roomListFetching: false,
    roomListFetchingError: null,
    userCard: null,
    userCardFetching: false,
    userCardFetchingError: null,
  }

  changeToken = (event) => {
    event.preventDefault();

    const tokenField = event.target.value;

    this.setState({ tokenField });
  }

  applyToken = () => {
    const { tokenField } = this.state;

    const regexp = /(([0-9])|([a-f])){40}/;

    if (regexp.test(tokenField)) {
      this.setState({
        tokenVerificationError: null,
        verifiedToken: tokenField,
      });
    } else {
      this.setState({
        tokenVerificationError: 'Your token invalid',
      });
    }
  }

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
  
  fetchUser = () => {
    this.setState({
      userCardFetching: true,
      userCardFetchingError: null,
    });

    const { token } = this.state;
    
    fetch(API_USER_ENDPOINT, { 
      headers: {                
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {  
        if (!response.ok) {
          throw Error(response.statusText); 
        } 

        return response.json(); 
      })
      .then(this.fetchUserSuccess) 
      .catch(this.fetchUserFailure);
  }
  fetchUserSuccess = userCard => this.setState({  
    userCard,
    userCardFetching: false,
  });

  fetchUserFailure = error => this.setState({
    userCardFetching: false,
    userCardFetchingError: error,
  });

  render() {
    // const { token, roomList, roomListFetching, roomListFetchingError, userCard, userCardFetching, userCardFetchingError} = this.state;
    // const hasRooms = !!roomList && roomList.length > 0;
    // const hasUser = !!userCard && userCard.length > 0;

    const { tokenField, tokenVerificationError, verifiedToken } = this.state;

    if (!verifiedToken) {
      return (
        <Wrapper>
          <Authorization
            token={tokenField}
            tokenVerificationError={tokenVerificationError}
            changeToken={this.changeToken}
            applyToken={this.applyToken}
          />
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <MainLayout />
      </Wrapper>
    );

    return (
      <div className={styles.container}>
        {/* <TokenEditor
          token={token}
          handleChange={this.changeToken}
        />
        <div className={styles.room}>
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
        <div className={styles.user}>
        {hasUser
          ? <UserCard user={userCard} />
          : <EmptyUserCard />
        }
        <UserFetchButton
          fetching={userCardFetching}
          error={userCardFetchingError}
          action={this.fetchUser}
        />
        {userCardFetchingError && (
          <div className="error">
            Fetch user failure
          </div>
        )}
        </div> */}
    	</div>
    );
  }
};

export default App;
