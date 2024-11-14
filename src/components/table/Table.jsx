import { useState, useEffect } from "react";
import TableFilter from "./Filter";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import TableToExcel from "./Excel";
import TableToPDF from "./Pdf";

const TableComponent = ({ data = [], search }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedColumns, setSelectedColumns] = useState([]);
  const rowsPerPage = 10;

  useEffect(() => {
    if (data.length > 0) {
      const initialColumns = Object.keys(data[0]);
      setSelectedColumns(initialColumns);
    } else {
      setSelectedColumns([]);
    }
  }, [data]);

  // Filtrar datos según el término de búsqueda y las columnas seleccionadas
  const filteredData = data.filter((row) =>
    selectedColumns.some((col) =>
      row[col]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const currentData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleColumnToggle = (column) => {
    setSelectedColumns((prevColumns) => {
      const updatedColumns = prevColumns.includes(column)
        ? prevColumns.filter((col) => col !== column)
        : [...prevColumns, column];

      if (data.length > 0) {
        const originalColumnOrder = Object.keys(data[0]);
        return updatedColumns.sort(
          (a, b) =>
            originalColumnOrder.indexOf(a) - originalColumnOrder.indexOf(b)
        );
      }
      return updatedColumns;
    });
  };

  const next = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  return (
    <div className="p-1 flex flex-col items-center text-xs">
      {search && (
        <div className="pb-1 w-full">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-1 border rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-focusColor"
          />
        </div>
      )}

      <div className="overflow-y-auto max-h-[400px] w-full custom-scrollbar relative">
        <table className="w-full text-xs text-left text-gray-700 border border-gray-300">
          <thead className="bg-mainTableColor text-white sticky top-0 z-10">
            <tr>
              {selectedColumns.map((col) => (
                <th key={col} className="px-2 py-1">
                  {col
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((row, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-100">
                  {selectedColumns.map((col) => (
                    <td key={col} className="px-2 py-1 border-t">
                      {row[col] ? row[col].toString() : "N/A"}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={selectedColumns.length}
                  className="px-2 py-1 text-center"
                >
                  No hay datos disponibles
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {data.length > 0 && (
        <div className="flex justify-between items-center w-full mt-2">
          {/* Agrupando los botones de Filtro, Excel y PDF */}
          <div className="flex items-center gap-0    ">
            <TableFilter
              columns={data.length > 0 ? Object.keys(data[0]) : []}
              selectedColumns={selectedColumns}
              onToggleColumn={handleColumnToggle}
            />
            <TableToExcel
              data={filteredData}
              selectedColumns={selectedColumns}
            />
            <TableToPDF data={filteredData} selectedColumns={selectedColumns} />
          </div>

          {/* Paginación */}
          <div className="flex items-center gap-8">
            <button
              onClick={prev}
              disabled={currentPage === 1}
              className={`p-1 rounded-full border ${
                currentPage === 1 ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <HiChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-gray-700">
              Página <strong>{currentPage}</strong> de{" "}
              <strong>{totalPages}</strong>
            </span>
            <button
              onClick={next}
              disabled={currentPage === totalPages}
              className={`p-1 rounded-full border ${
                currentPage === totalPages ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <HiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableComponent;
