import React from 'react';
import ExcelJS from 'exceljs';

const TableToExcel = ({ data, selectedColumns }) => {
  const handleDownloadExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');
    
    // Usa solo las columnas seleccionadas
    const columns = selectedColumns.length ? selectedColumns : Object.keys(data[0]);
    
    worksheet.columns = columns.map(col => ({ header: col.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()), key: col }));

    // Filtra las filas de acuerdo a las columnas seleccionadas
    data.forEach(row => {
      const filteredRow = {};
      columns.forEach(col => {
        filteredRow[col] = row[col] || 'N/A';  // Usar 'N/A' si no hay dato
      });
      worksheet.addRow(filteredRow);
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'table.xlsx';
    a.click();
  };

  return (
    <button onClick={handleDownloadExcel}>Excel</button>
  );
};

export default TableToExcel;