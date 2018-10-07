// import { call, put, takeEvery } from 'redux-saga/effects';

// // import action helpers
// import { YYY } from '';

// import { ZZZ } from '../../reducers/responseHandlers';

// import {
//   showLoader,
//   receiveEntities,
//   handleSuccessResponse,
//   handleErrorResponse
// } from '../../actions/sharedActions';

// // import fetches and sagas
// import api_XXX from ''

// // import normalizers

// // import selectors

// //////////////////////
// // Sagas
// //////////////////////

// export function* watchXXXSaga() {
//   yield takeEvery(YYY, workXXXSaga);
// }

// function* workXXXSaga(action) {
//   const { } = action;
//
//   const requestData = {  };
//
//   const responseHandlerPayload = {
//     handler: ZZZ,
//     byId:
//   };
//   try {
//     yield put(showLoader(responseHandlerPayload))
//     const res = yield call(api_XXX, requestData);
//     yield put();
//     yield put(handleSuccessResponse(responseHandlerPayload));

//     yield call(handleXXXSuccessSaga, {  });
//   } catch (error) {
//     yield put(handleErrorResponse({ ...responseHandlerPayload, error }));
//   }
// }

// function* handleXXXSuccessSaga({  }) {

// }
