'use client';

import { Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import CreateProductModal from './create-product-modal';
import { useState } from 'react';

export default function CreateProductFab() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
      <CreateProductModal
        open={modalVisible}
        handleClose={() => setModalVisible(false)}
      />
      <div className='absolute right-10 bottom-10'>
        <Fab color='primary' onClick={() => setModalVisible(true)}>
          <Add />
        </Fab>
      </div>
    </>
  );
}
