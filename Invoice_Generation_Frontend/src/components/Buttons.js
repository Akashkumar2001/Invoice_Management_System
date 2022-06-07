import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
import Add from "./dialog/Add";
import Edit from "./dialog/Edit";
import Delete from "./dialog/Delete";
import AdvanceSearch from "./dialog/AdvanceSearch";
import AnalyticsView from "./dialog/AnalyticsView";

import { updateData } from "./server/axios";
import { addData } from "./server/axios";
import { deleteData } from "./server/axios";

const style = {
  m: 1,
  p: 1,
};



const buttonStyle = {
  color: "white",
  width: "170px",
  maxHeight: "40px",
  marginTop: "10px",
  marginBottom: "10px",
};

function Buttons({
  checkedData,
  setCheckedData,
  search_customer_id,
  setSearchCustomer_id,
  selected,
  advanceSearch,
  setAdvanceSearch,
  setCheckAdvanSearch
}) {
  /* ----------------------Edit Functionality ---------------------- */

  const [openEdit, setOpenEdit] = useState(false);

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const changeCheckedData = (e) => {
    const { name, value } = e.target;
    setCheckedData({ ...checkedData, [name]: value });
  };

  var { currency, payment_term } = checkedData;

  const handleCloseEdit = async (update) => {
    if (update) {
      await updateData(checkedData);
    }
    setOpenEdit(false);
  };

  

  /* ----------------------Edit Functionality End ---------------------- */

  /* ----------------------Add Functionality ---------------------- */

  const [openAdd, setOpenAdd] = useState(false);

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const [info, setInfo] = useState({
    business_code: "",
    code: "",
    clear_date: "",
    year: "",
    doc_id: "",
    posting_date: "",
    create_date: "",
    due_date: "",
    add_currency: "",
    doc_type: "",
    posting_id: "",
    tot_amount: "",
    baseline_date: "",
    add_payment_term: "",
    invoice_id: "",
  });

  const {
    business_code,
    code,
    clear_date,
    year,
    doc_id,
    posting_date,
    create_date,
    due_date,
    add_currency,
    doc_type,
    posting_id,
    tot_amount,
    baseline_date,
    add_payment_term,
    invoice_id,
  } = info;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let response = await addData(info);
    if (response) {
      setOpenAdd(false);
      setInfo({
        business_code: "",
        code: "",
        clear_date: "",
        year: "",
        doc_id: "",
        posting_date: "",
        create_date: "",
        due_date: "",
        add_currency: "",
        doc_type: "",
        posting_id: "",
        tot_amount: "",
        baseline_date: "",
        add_payment_term: "",
        invoice_id: "",
      });
    }
  };

  const resetHandler = () => {
    setInfo({
      business_code: "",
      code: "",
      clear_date: "",
      year: "",
      doc_id: "",
      posting_date: "",
      create_date: "",
      due_date: "",
      add_currency: "",
      doc_type: "",
      posting_id: "",
      tot_amount: "",
      baseline_date: "",
      add_payment_term: "",
      invoice_id: "",
    });
  };

  useEffect(() => {
    async function fetchData() {
      setInfo(await addData());
    }
    fetchData();
  }, []);

  /* ----------------------Add Functionality End---------------------- */

  /* ---------------------- Delete Functionality  --------------------*/

  const [openDelete, setOpenDelete] = useState(false);

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const submitDelete = async () => {
    await deleteData(checkedData);
    setOpenDelete(false);
  };

  /* ---------------------- Delete Functionality End --------------------*/

  /* ---------------------- Analytics View Functionality --------------------*/

  const [openAnalyticsView, setOpenAnalyticsView] = useState(false);

  const handleClickOpenAnalytics = () => {
    setOpenAnalyticsView(true);
  };

  /* ---------------------- Analytics View Functionality End --------------------*/

  /* ---------------------Advance Search --------------------*/

  const [openAdvanceSearch, setOpenAdvanceSearch] = useState(false);
  const {
    search_doc_id,
    search_cust_name,
    search_invoice_id,
    search_business_year,
  } = advanceSearch;

  const handleClickOpenAdvanceSearch = () => {
    setOpenAdvanceSearch(true);
  };

  const handleCloseAdvanceSearch = () => {
    setCheckAdvanSearch(true);
    setOpenAdvanceSearch(false);
  }

  const changeAdvanceSearchHandler = (e) => {
    const { name, value } = e.target;
    setAdvanceSearch({ ...advanceSearch, [name]: value });
  };

  return (
    <div>
      <Box
        sx={{
          bgcolor: "#29363d",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
          sx={{ ...style }}
        >
          <Button sx={{ backgroundColor: "#2196f3", ...buttonStyle }}>
            {" "}
            Predict{" "}
          </Button>
          <Button sx={{ ...buttonStyle }} onClick={handleClickOpenAnalytics}>
            Analytics View
          </Button>
          <Button
            sx={{ ...buttonStyle }}
            onClick={handleClickOpenAdvanceSearch}
          >
            Advanced Search
          </Button>
          <Button sx={{color:"white",width: "60px",
            maxHeight: "40px",
            marginTop: "10px",
            marginBottom: "10px",}}
            onClick={() => window.location.reload(false)}>
            <ReplayIcon/>
          </Button>
        </ButtonGroup>
        <TextField
          id="outlined-search"
          placeholder="Search Customer Id"
          type="search"
          autoComplete="off"
          sx={{
            bgcolor: "white",
            borderRadius: "5px",
            marginTop: "20px",
            marginBottom: "20px",
            color: "#e0e0e0",
          }}
          name="search_customer_id"
          value={search_customer_id}
          onChange={(e) => setSearchCustomer_id(e.target.value)}
        />

        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
          sx={{ ...style }}
        >
          <Button sx={{ ...buttonStyle }} onClick={handleClickOpenAdd}
            disabled={selected.length > 0 ? true : false}
          >
            ADD
          </Button>

          <Button
            sx={{ ...buttonStyle }}
            onClick={handleClickOpenEdit}
            disabled={selected.length > 0 && selected.length < 2 ? false : true}
          >
            EDIT
          </Button>
          <Button sx={{ ...buttonStyle }} onClick={handleClickOpenDelete}
            disabled={selected.length > 0 ? false : true}
          >
            DELETE
          </Button>
        </ButtonGroup>
      </Box>
      {openAdd && (
        <Add
          business_code={business_code}
          code={code}
          clear_date={clear_date}
          year={year}
          doc_id={doc_id}
          posting_date={posting_date}
          create_date={create_date}
          due_date={due_date}
          add_currency={add_currency}
          doc_type={doc_type}
          posting_id={posting_id}
          tot_amount={tot_amount}
          baseline_date={baseline_date}
          add_payment_term={add_payment_term}
          invoice_id={invoice_id}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
          openAdd={openAdd}
          setOpenAdd={setOpenAdd}
          handleCloseAdd={handleCloseAdd}
          resetHandler={resetHandler}
        />
      )}
      {openEdit && (
        <Edit
          openEdit={openEdit}
          handleCloseEdit={handleCloseEdit}
          currency={currency}
          payment_term={payment_term}
          checkedData={checkedData}
          selected={selected}
          changeCheckedData={changeCheckedData}
        />
      )}
      {openDelete && (
        <Delete
          openDelete={openDelete}
          handleCloseDelete={handleCloseDelete}
          submitDelete={submitDelete}
        />
      )}

      {openAnalyticsView && (
        <AnalyticsView
          openAnalyticsView={openAnalyticsView}
          setOpenAnalyticsView={setOpenAnalyticsView}
        />
      )}

      {openAdvanceSearch && (
        <AdvanceSearch
          openAdvanceSearch={openAdvanceSearch}
          setOpenAdvanceSearch={setOpenAdvanceSearch}
          search_doc_id={search_doc_id}
          search_cust_name={search_cust_name}
          search_invoice_id={search_invoice_id}
          search_business_year={search_business_year}
          changeAdvanceSearchHandler={changeAdvanceSearchHandler}
          handleCloseAdvanceSearch={handleCloseAdvanceSearch}
        />
      )}
    </div>
  );
}

export default Buttons;
