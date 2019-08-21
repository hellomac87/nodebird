import { all, call, put, fork, take, takeLatest, takeEvery, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from '../reducers/user';

function loginAPI() {
  // 서버에 요청을 보내는 부분
}

function* login() {
  try {
    // call 은 동기 요청으로 응답이 다 받아질때까지 기다린다.
    yield call(loginAPI);
    yield put({
      // put은 dispatch랑 동일
      type: LOG_IN_SUCCESS,
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, login);
  // while (true) {
  //   yield take(LOG_IN);
  //   // put 은 redux 의 dispatch 역할
  //   yield delay(2000);
  //   yield put({
  //     type: LOG_IN_SUCCESS
  //   });
  // }
}

function* signupAPI() {
  return yield axios.post('/signup');
}

function* signup() {
  try {
    yield call(signupAPI);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: SIGN_UP_FAILURE,
    });
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signup);
}

export default function* userSaga() {
  // 이벤트 리스너처럼 해당 액션이 실행되기를 기다린다.
  yield all([
    // watchHello(),
    fork(watchLogin),
    fork(watchSignUp),
  ]);
}

// call, fork
// 함수 실행의 역할
// call 은 동기 호출
// fork 는 비동기 호출
