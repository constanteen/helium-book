/* istanbul ignore file */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../../store/reducers';

const render = (
	ui,
	{ initialState, store = createStore(reducers, initialState), ...renderOptions } = {}
) => {
	const Wrapper = ({ children }) => {
		return <Provider store={store}>{children}</Provider>;
	};
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
};

export * from '@testing-library/react';

export {render};