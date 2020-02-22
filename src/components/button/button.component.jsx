import React from 'react';

import { Button } from 'antd';

export const AddButton = (props) => {
  return (
    <Button type="primary" shape="circle" icon="plus" size="large" {...props} />
  );
}

export const EditButton = (props) => {
  return (
    <Button type="link" size="small" icon="edit" {...props} />
  )
};

export const DeleteButton = (props) => {
  return (
    <Button type="link" size="small" icon="delete" {...props} />
  )
};