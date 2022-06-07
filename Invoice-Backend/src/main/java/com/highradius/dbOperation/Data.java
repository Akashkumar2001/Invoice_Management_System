package com.highradius.dbOperation;

public class Data {
	private String code, name, clear_date, year, doc_id, posting_date, create_date, due_date, currency, doc_type, posting_id, tot_amount, baseline_date, payment_term, invoice_id;
	private int dataId;
	
	public Data(int dataId, String code, String name, String clear_date, String year, String doc_id, String posting_date,
			String create_date, String due_date, String currency, String doc_type, String posting_id, String tot_amount,
			String baseline_date, String payment_term, String invoice_id) {
		super();
		this.dataId = dataId;
		this.code = code;
		this.name = name;
		this.clear_date = clear_date;
		this.year = year;
		this.doc_id = doc_id;
		this.posting_date = posting_date;
		this.create_date = create_date;
		this.due_date = due_date;
		this.currency = currency;
		this.doc_type = doc_type;
		this.posting_id = posting_id;
		this.tot_amount = tot_amount;
		this.baseline_date = baseline_date;
		this.payment_term = payment_term;
		this.invoice_id = invoice_id;
	}
	
	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getClear_date() {
		return clear_date;
	}

	public void setClear_date(String clear_date) {
		this.clear_date = clear_date;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getDoc_id() {
		return doc_id;
	}

	public void setDoc_id(String doc_id) {
		this.doc_id = doc_id;
	}

	public String getPosting_date() {
		return posting_date;
	}

	public void setPosting_date(String posting_date) {
		this.posting_date = posting_date;
	}

	public String getCreate_date() {
		return create_date;
	}

	public void setCreate_date(String create_date) {
		this.create_date = create_date;
	}

	public String getDue_date() {
		return due_date;
	}

	public void setDue_date(String due_date) {
		this.due_date = due_date;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public String getDoc_type() {
		return doc_type;
	}

	public void setDoc_type(String doc_type) {
		this.doc_type = doc_type;
	}

	public String getPosting_id() {
		return posting_id;
	}

	public void setPosting_id(String posting_id) {
		this.posting_id = posting_id;
	}

	public String getTot_amount() {
		return tot_amount;
	}

	public void setTot_amount(String tot_amount) {
		this.tot_amount = tot_amount;
	}

	public String getBaseline_date() {
		return baseline_date;
	}

	public void setBaseline_date(String baseline_date) {
		this.baseline_date = baseline_date;
	}

	public String getPayment_term() {
		return payment_term;
	}

	public void setPayment_term(String payment_term) {
		this.payment_term = payment_term;
	}

	public String getInvoice_id() {
		return invoice_id;
	}

	public void setInvoice_id(String invoice_id) {
		this.invoice_id = invoice_id;
	}
}
