import React from 'react'
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';
import FormikForEdit from '../formikForEdit';


const ModalElement = ({open,setOpen,id}) => {
    
  return (
    <>
       <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
           Edit your address
          </Typography>
         <Box>
            <FormikForEdit id={id} setOpen={setOpen}/>
         </Box>
        </Sheet>
      </Modal>
    </>
  )
}

export default ModalElement