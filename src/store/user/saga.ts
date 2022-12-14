import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';
import { getProfileRequest } from 'src/store/user';
import { GetProfileRequestPayload } from 'src/store/user/types';

import { getProfileFailure } from '.';

export function* updateProfileRequest(
  action: PayloadAction<GetProfileRequestPayload>
) {
  try {
    // const data = yield call(getProfileApi, action.payload.id);
    // yield put(getProfileSuccess({ profile: data.data }));
  } catch (errors: unknown) {
    yield put(getProfileFailure({ errors }));
  }
}

export default function* userSaga() {
  yield takeLatest(getProfileRequest.type, updateProfileRequest);
}
