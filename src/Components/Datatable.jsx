import "./datatable.scss";
import "./para.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./datatablesource";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { Toolbar, Tab, Tabs, InputBase, Button, TextField, } from "@mui/material";
// import { Value } from "sass";


const Datatable = () => {
  const [data, setData] = useState(userRows);
  const[val,setVal]=useState(0);
  const handleTabs=(e,val)=>{
    console.warn(val)
    setVal(val)
  }
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
 

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link> */}
            <div
              className="deleteButton"
              onClick={ ()=> handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      Organisation
      <div className="datatableTitle" variant="h3" fontWeight="bold" fontColor="black">
        ECU Worldwide
        {/* <Link to="/users/new" className="link">
          Add New
        </Link> */}
      </div>
 
      <Toolbar marginRight="20px">
        
        <Tabs textColor="inherit" value={val} onChange={handleTabs}> 
          <Tab label="Users" />
          <Tab label="Groups" />
          <Tab label="Detail" /> 
        </Tabs>
        



        <TextField placeholder="Search group" sx={{ marginLeft: '240px' }} Color="secondary" variant="outlined" style={{ width: "30%", marginBottom: "6px" }} />

        <Button sx={{ marginLeft: '7px' , marginBottom:'10px',width:'150px',height:'50px'}} textColor="inherit" backGroundColor="blue" variant="contained" width="20px">Create Group</Button>
      </Toolbar>

      <DataGrid
        className="datagrid"
        rows={data}  
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
      // checkboxSelection
      />
    </div>
  );
};

export default Datatable;

