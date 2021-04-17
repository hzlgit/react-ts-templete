/*
 * @Descripttion: 输入框
 * @Author: huangjun
 * @Date: 2021-03-08 10:52:44
 * @LastEditors: huangjun
 * @LastEditTime: 2021-03-08 12:42:33
 */
import * as React from 'react';

type ReactInput = React.InputHTMLAttributes<HTMLInputElement>;

interface InputCellProps extends ReactInput {
  title?: string;
}
const InputCell = ({title, ...others}: InputCellProps) => {
  const inputStyle = {
    flex: 1,
    height: '44px',
    borderWidth: '1px',
    borderRadius: '5px',
    backgroundColor: 'white',
    marginBottom: '16px',
    padding: '0 16px 0 16px',
  };
  return (
    <div
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        display: 'flex',
      }}>
      {title ? <span>{title}</span> : null}
      <input style={inputStyle} {...others}></input>
    </div>
  );
};

export default InputCell;
