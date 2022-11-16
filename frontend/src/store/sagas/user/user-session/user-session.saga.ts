import { call, cancelled, put, takeLatest } from 'redux-saga/effects';
import type { TSafeReturn } from '../../../../helpers/sagas';
import { safe } from '../../../../helpers/sagas';
import { request } from '../../../../services';
import {
  checkUserSessionAsync,
  setUserInfo,
  setUserSessionCheckLoadStatusFailure,
  setUserSessionCheckLoadStatusLoading,
  setUserSessionCheckLoadStatusSuccess,
} from '../../../slices';

async function checkUserSession(abortSignal: AbortSignal) {
  return request({
    url: `http://127.0.0.1:3000/v1/access/login`,
    abortSignal,
  });
}

function* checkUserSessionWorker(action: { type: string }) {
  const abortController = new AbortController();
  try {
    yield put(setUserSessionCheckLoadStatusLoading());

    const fetchStatus = (yield safe(
      call(checkUserSession, abortController.signal),
    )) as TSafeReturn<Response>;

    if (fetchStatus.error !== undefined) {
      yield put(setUserSessionCheckLoadStatusFailure({ error: String(fetchStatus.error) }));
      return;
    }

    /* eslint-disable @typescript-eslint/unbound-method */
    const jsonParse = (yield safe(
      call([fetchStatus.response, fetchStatus.response.json]),
    )) as TSafeReturn<{
      isAuthenticated: boolean;
      login?: string;
    }>;

    if (jsonParse.error !== undefined) {
      yield put(setUserSessionCheckLoadStatusFailure({ error: String(jsonParse.error) }));
      return;
    }

    // if no delay used - setIdle instantly overrides success
    yield put(setUserSessionCheckLoadStatusSuccess(jsonParse.response));
    yield put(setUserInfo(jsonParse.response));
  } finally {
    if ((yield cancelled()) as boolean) {
      abortController.abort();
    }
  }
}

function* userSessionWatcher() {
  yield takeLatest(checkUserSessionAsync, checkUserSessionWorker);
}

export { userSessionWatcher };
