import { all, call, takeLatest, put } from 'redux-saga/effects';
function* noop() {
	console.log('This is the noop');
}

export function* actionWatcher() {
	yield takeLatest('TEST_NOOP', noop);
}

const generateRootSaga = (pageActionWatcher) => {
	return function* rootSaga() {
		const callArray = [call(actionWatcher)];
		if (pageActionWatcher) {
			callArray.push(call(pageActionWatcher));
		}
		yield all(callArray);
	};
};
export default generateRootSaga;
