/*
 * @Descripttion:
 * @Author: huangjun
 * @Date: 2021-03-08 10:29:07
 * @LastEditors: huangjun
 * @LastEditTime: 2021-03-08 12:08:12
 */
import {render, screen} from '@testing-library/react';
import App from './route';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
