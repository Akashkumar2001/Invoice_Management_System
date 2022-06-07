import axios from "axios";
export const addData = async ({
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
}) => {
  let data =
    "business_code" +
    business_code +
    "&code=" +
    code +
    "&clear_date=" +
    clear_date +
    "&year=" +
    year +
    "&doc_id=" +
    doc_id +
    "&posting_date=" +
    posting_date +
    "&create_date=" +
    create_date +
    "&due_date=" +
    due_date +
    "&currency=" +
    add_currency +
    "&doc_type=" +
    doc_type +
    "&posting_id=" +
    posting_id +
    "&tot_amount=" +
    tot_amount +
    "&baseline_date=" +
    baseline_date +
    "&payment_term=" +
    add_payment_term +
    "&invoice_id=" +
    invoice_id;

  let response = await axios.get(
    "http://localhost:8080/Invoice-Backend/addData?" + data
  );

  return response.data;
};

export const getData = async () => {
  let response = await axios.get(
    "http://localhost:8080/Invoice-Backend/DisplayData"
  );
  if (response) {
    let info = response.data.datas;
    let count = 1;
    info.map((data) => {
      data["id"] = count;
      count = count + 1;
    });
    return info;
  }
};

export const updateData = async ({ dataId, currency, payment_term }) => {
  let data =
    "dataId=" +
    dataId +
    "&currency=" +
    currency +
    "&payment_term=" +
    payment_term;

  let response = await axios.get(
    "http://localhost:8080/Invoice-Backend/updateData?" + data
  );

  return response.data;
};

export const deleteData = async ({ dataId }) => {
  let data = "dataId=" + dataId;
  let response = await axios.get(
    "http://localhost:8080/Invoice-Backend/deleteData?" + data
  );

  return response.data;
};
