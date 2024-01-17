import React from 'react'
import emaillist from '../../emaillist.json'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'name', width: 130 },
    { field: 'email', headerName: 'email', width: 500 },
    
  ];


  
const MailList = () => {
    
  return (
    <div>

<div style={{ height: '100vh', width: '100%' }}>
      <DataGrid
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
        rows={emaillist}
        columns={columns}
        
      />
    </div>

    </div>
  )
}

export default MailList