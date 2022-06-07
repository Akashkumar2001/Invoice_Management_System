import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { visuallyHidden } from "@mui/utils";

import { getData } from "./server/axios";
import Buttons from "./Buttons";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  setTimeout(stableSort, 5000);
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headCells,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{ color: "white" }}>
      <TableRow sx={{ color: "white" }}>
        <TableCell padding="checkbox" sx={{ color: "white" }}>
          <Checkbox
            sx={{ color: "white" }}
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            sx={{ color: "white" }}
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              sx={{ color: "white" }}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState([
    "business_code",
    "code",
    "clear_date",
    "year",
    "doc_id",
    "posting_date",
    "create_date",
    "due_date",
    "currency",
    "doc_type",
    "posting_id",
    "tot_amount",
    "baseline_date",
    "payment_term",
    "invoice_id",
  ]);

  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [rows, setRow] = useState([]);

  const [headCells, setHeadCell] = useState([
    { id: "id", field: "id", label: "Sl No" },
    { id: "business_code", field: "business_code", label: "Business Code" },
    { id: "code", field: "code", label: "Customer Number" },
    { id: "clear_date", field: "clear_date", label: "Clear Date" },
    { id: "year", field: "year", label: "Business Year" },
    { id: "doc_id", field: "doc_id", label: "Document ID" },
    { id: "posting_date", field: "posting_date", label: "Posting Date" },
    { id: "create_date", field: "create_date", label: "Document Create Date" },
    { id: "due_date", field: "due_date", label: "Due Date" },
    { id: "currency", field: "currency", label: "Invoice Currency" },
    { id: "doc_type", field: "doc_type", label: "Document Type" },
    { id: "posting_id", field: "posting_id", label: "Posting ID" },
    { id: "tot_amount", field: "tot_amount", label: "Total Open Amount" },
    { id: "baseline_date", field: "baseline_date", label: "Baseline Create" },
  ]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
    console.log("selected - ", selected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const boxPaperStyle = {
    width: "100%",
    height: "auto",
    backgroundColor: "#29363d",
    color: "white",
  };

  const [checkedData, setCheckedData] = useState([]);

  const checkHandler = (e, rowId) => {
    if (e.target.checked) {
      let editData = rows.filter((row) => row.id === rowId)[0];
      console.log("editData ", editData);
      setCheckedData(editData);
    } else {
      setCheckedData([]);
    }
  };
  const [search_customer_id, setSearchCustomer_id] = useState("");
  const [advanceSearch, setAdvanceSearch] = useState({
    search_doc_id: "",
    search_cust_name: "",
    search_invoice_id: "",
    search_business_year: "",
  });
  const {
    search_doc_id,
    search_cust_name,
    search_invoice_id,
    search_business_year,
  } = advanceSearch;
  const [checkAdvanSearch, setCheckAdvanSearch] = useState(false);

  console.log("search customer = " + search_customer_id);
  console.log("rows ", rows);
  console.log("checked", selected.length);

  useEffect(() => {
    async function fetchData() {
      setRow(await getData());

      if (search_customer_id.length > 0) {
        setRow(rows.filter((row) => row.code.includes(search_customer_id)));
      }
      if (checkAdvanSearch && search_doc_id.length > 0) {
        setRow(rows.filter((row) => row.doc_id.includes(search_doc_id)));
      }
      if (checkAdvanSearch && search_cust_name.length > 0) {
        setRow(rows.filter((row) => row.name.includes(search_cust_name)));
      }
      if (checkAdvanSearch && search_invoice_id.length > 0) {
        setRow(
          rows.filter((row) => row.invoice_id.includes(search_invoice_id))
        );
      }
      if (checkAdvanSearch && search_business_year.length > 0) {
        setRow(rows.filter((row) => row.year.includes(search_business_year)));
      }
    }
    fetchData();
  }, [
    rows,
    setRow,
    search_customer_id,
    search_doc_id,
    search_cust_name,
    search_invoice_id,
    search_business_year,
  ]);

  return (
    <>
      <Buttons
        checkedData={checkedData}
        setCheckedData={setCheckedData}
        search_customer_id={search_customer_id}
        setSearchCustomer_id={setSearchCustomer_id}
        selected={selected}
        advanceSearch={advanceSearch}
        setAdvanceSearch={setAdvanceSearch}
        setCheckAdvanSearch={setCheckAdvanSearch}
      />

      <Box sx={{ ...boxPaperStyle }}>
        <Paper sx={{ ...boxPaperStyle, mb: 2 }}>
          <TableContainer sx={{ color: "white" }}>
            <Table
              sx={{ minWidth: 750, color: "white" }}
              aria-labelledby="tableTitle"
              size="small"
            >
              <EnhancedTableHead
                sx={{ color: "white" }}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
                headCells={headCells}
              />

              <TableBody sx={{ color: "white" }}>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        sx={{ color: "white" }}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox" sx={{ color: "white" }}>
                          <Checkbox
                            sx={{ color: "white" }}
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              color: "white",
                              "aria-labelledby": labelId,
                            }}
                            onClick={(e) => checkHandler(e, row.id)}
                          />
                        </TableCell>
                        <TableCell
                          sx={{ color: "white" }}
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                          margin="5"
                        >
                          {row.id}
                        </TableCell>
                        <TableCell sx={{ color: "white", p: 0, m: 0 }}>
                          {row.business_code}
                        </TableCell>
                        <TableCell sx={{ color: "white", p: 0, m: 0 }}>
                          {row.code}
                        </TableCell>
                        <TableCell sx={{ color: "white", p: 0, m: 0 }}>
                          {row.clear_date}
                        </TableCell>
                        <TableCell sx={{ color: "white", p: 0, m: 0, align:"right" }}>
                          {row.year}
                        </TableCell>

                        <TableCell sx={{ color: "white", p: 0, m: 0 }}>
                          {row.doc_id}
                        </TableCell>
                        <TableCell sx={{ color: "white", p: 0, m: 0 }}>
                          {row.posting_date}
                        </TableCell>
                        <TableCell sx={{ color: "white", p: 0, m: 0 }}>
                          {row.create_date}
                        </TableCell>
                        <TableCell sx={{ color: "white", p: 0, m: 0 }}>
                          {row.due_date}
                        </TableCell>
                        <TableCell sx={{ color: "white", p: 0, m: 0, alignItems:"right" }}>
                          {row.currency}
                        </TableCell>

                        <TableCell sx={{ color: "white", p: 0, m: 0 }}>
                          {row.doc_type}
                        </TableCell>
                        <TableCell sx={{ color: "white", p: 0, m: 0 }}>
                          {row.posting_id}
                        </TableCell>
                        <TableCell sx={{ color: "white", p: 0, m: 0 }}>
                          {row.tot_amount}
                        </TableCell>
                        <TableCell sx={{ color: "white", p: 0, m: 0 }}>
                          {row.baseline_date}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 33 * emptyRows,
                      color: "white",
                    }}
                  >
                    <TableCell  sx={{ color: "white" }} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{ color: "white" }}
          />
        </Paper>
      </Box>
    </>
  );
}
