import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const FertilizerTable = ({ rowData }) => {
  const columnDefs = [
    { headerName: "State", field: "state", sortable: true, filter: true },
    { headerName: "Fertilizer", field: "fertilizer", sortable: true, filter: true },
    { headerName: "Requirement", field: "requirement", sortable: true, filter: true },
    { headerName: "Availability", field: "availability", sortable: true, filter: true },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
      />
    </div>
  );
};

export default FertilizerTable;
