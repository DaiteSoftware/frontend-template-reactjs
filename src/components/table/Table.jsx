import { useState, useEffect } from "react";
import TableFilter from "./Filter";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

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

  const renderPaginationButtons = () => {
    const pages = [];
    pages.push(1);

    if (currentPage === 1) {
      pages.push(2);
    } else if (currentPage === totalPages) {
      pages.push(totalPages - 1);
    } else {
      pages.push(currentPage);
    }
    pages.push(totalPages);

    return pages.map((page, index) => (
      <button
        key={index}
        onClick={() => goToPage(page)}
        className={`px-2 py-1 rounded-md text-sm ${
          currentPage === page
            ? "bg-hoverColor text-white border border-borderColor hover:text-textHoverColor"
            : "bg-white text-gray-700 hover:bg-gray-400"
        }`}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="p-2 flex flex-col items-center">
      {search && (
        <div className="pb-1 w-full md:w-3/4">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-focusColor"
          />
        </div>
      )}

      <div className="overflow-y-auto max-h-[400px] w-full custom-scrollbar relative">
        <table className="w-full text-sm text-left text-gray-700 border border-gray-300">
          <thead className="bg-mainTableColor text-white sticky top-0 z-10">
            <tr>
              {selectedColumns.map((col) => (
                <th key={col} className="px-4">
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
                    <td key={col} className="px-4 border-t">
                      {row[col] ? row[col].toString() : "N/A"}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={selectedColumns.length}
                  className="px-4 py-2 text-center"
                >
                  No hay datos disponibles
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {data.length > 0 && (
        <div className="flex justify-between items-center w-full md:w-3/4 mt-4">
          {/* Filtro de columnas */}
          <TableFilter
            columns={data.length > 0 ? Object.keys(data[0]) : []}
            selectedColumns={selectedColumns}
            onToggleColumn={handleColumnToggle}
          />

          {/* Paginación */}
          <div className="flex space-x-1">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-2 py-1 bg-white text-gray-700 hover:bg-hoverColor border border-borderColor hover:text-textHoverColor disabled:opacity-50 rounded-md"
            >
              <FaArrowAltCircleLeft />
            </button>
            {renderPaginationButtons()}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-2 py-1 bg-white text-gray-700 hover:bg-hoverColor border border-borderColor hover:text-textHoverColor disabled:opacity-50 rounded-md"
            >
              <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableComponent;
