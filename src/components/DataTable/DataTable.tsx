import React, { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { Button,
  Dialog, 
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from '@material-ui/core';
import { VinylForm } from '../../components/VinylForm';


interface gridData{
  data: {
    id?:string;
  }
};

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Vinyl name', width: 130 },
    { field: 'label', headerName: 'Label', width: 130 },
    {
      field: 'price',
      headerName: 'price',
      type: 'string',
      width: 90,
    },
  ];



  export const DataTable = () => {
    let { vinylData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}});

    let handleOpen = () => {
      setOpen(true)
    }

    let handleClose = () => {
      setOpen(false)
    }

    let deleteData = () => {
      server_calls.delete(gridData.data.id!)
      getData()
  }

  console.log(gridData.data.id)

    return (
        <div style={{ height: 400, width: '100%' }}>
          <h2>Vinyl Inventory</h2>
          <DataGrid rows={vinylData} columns={columns} pageSize={5} checkboxSelection onRowSelected = { setData } />

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

          {/*Dialog Pop Up begin */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update Vinyl</DialogTitle>
          <DialogContent>
            <DialogContentText>Update Vinyl</DialogContentText>
              <VinylForm id={gridData.data.id!}/>
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose} color="primary">Cancel</Button>
            <Button onClick={handleClose} color = "primary">Done</Button> 
          </DialogActions>
        </Dialog>
        </div>
      );    
}

