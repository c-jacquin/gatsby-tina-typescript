import React from 'react';
import styled from '@emotion/styled';
import { FaEdit, FaSave } from 'react-icons/fa';

const Button = styled.button<{
  fixed?: boolean;
}>(({ fixed }) => ({
  position: fixed ? 'fixed' : 'static',
  bottom: 20,
  right: 20,
  border: 0,
  width: '50px',
  height: '50px',
  borderRadius: '50px',
  backgroundColor: 'green',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '100000000000 !important' as any,
}));

interface EditButonsProps {
  isEditing: boolean;
  onClick: any;
  fixed?: boolean;
}

const EditButton: React.FC<EditButonsProps> = ({ isEditing, onClick, fixed }) => {
  return (
    <Button fixed={fixed} type="button" onClick={onClick}>
      {isEditing ? <FaSave color="white" /> : <FaEdit color="white" />}
    </Button>
  );
};

export default EditButton;
