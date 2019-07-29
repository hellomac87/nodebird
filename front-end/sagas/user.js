import { all, put, fork, take, takeLatest } from "redux-saga/effects";
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../reducers/user";

const HELLO_SAGA = "HELLO_SAGA";

function loginAPI() {
  // 서버에 요청을 보내는 부분
}

function* login() {
  try {
    yield call(loginAPI);
    yield put({
      // put은 dispatch랑 동일
      type: LOG_IN_SUCCESS
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE
    });
  }
}

function* helloSaga() {
  console.log("before saga");
  // take 함수 안에 next가 들어있음
  // action 'HELLO_SAGA' 이 디스패치 될때까지 함수를 중단했다가 풀어준다
  while (true) {
    yield take(HELLO_SAGA);
    console.log("hello saga");
    // 비동기요청 또는 타이머
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN, login);
}

export default function* userSaga() {
  yield helloSaga();
}
