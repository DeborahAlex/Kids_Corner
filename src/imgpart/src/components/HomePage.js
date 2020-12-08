import React from 'react';
import UploadForm from './UploadForm';
import UploadImage from './PicUploadForm'
import {Provider} from 'react-redux'
import store from '../store/store'
const HomePage = () => (
  <Provider store={store}>

  <div className="home-page">
    <UploadImage/>
  </div>
  </Provider>

);

export default HomePage;