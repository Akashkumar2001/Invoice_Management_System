<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Sign Up Form by Colorlib</title>

<!-- Font Icon -->
<link rel="stylesheet"
	href="fonts/material-icon/css/material-design-iconic-font.min.css">

<!-- Main css -->
<link rel="stylesheet" href="css/style.css">
</head>
<body>

<input type="hidden" id="status" value="<%= request.getAttribute("status") %>">

	<div class="main">

		<!-- Sign up form -->
		<section class="signup">
			<div class="container">
				<div class="signup-content">
					<div class="signup-form">
						<h2 class="form-title">Sign up</h2>
						<a href="deleteData"><button type="button">Delete</button></a>
					
						<form method="post" action="addData" class="register-form"
							id="register-form">
							<div class="form-group">
								<label for="code"><i
									class="zmdi zmdi-account material-icons-name"></i></label> <input
									type="text" name="code" id="code" placeholder="Business Code" />
							</div>
							
							<div class="form-group">
								<label for="name"><i
									class="zmdi zmdi-account material-icons-name"></i></label> <input
									type="text" name="name" id="name" placeholder="Customer Name" />
							</div>
							
							<div class="form-group">
								<label for="clear_date"><i
									class="zmdi zmdi-account material-icons-name"></i></label> <input
									type="text" name="clear_date" id="clear_date" placeholder="Clear Date" />
							</div>
							
							<div class="form-group">
								<label for="year"><i
									class="zmdi zmdi-account material-icons-name"></i></label> <input
									type="text" name="year" id="year" placeholder="Business Year" />
							</div>
							
							<div class="form-group">
								<label for="doc_id"><i
									class="zmdi zmdi-account material-icons-name"></i></label> <input
									type="text" name="doc_id" id="doc_id" placeholder="Document Id" />
							</div>
							
							<div class="form-group">
								<label for="posting_date"><i
									class="zmdi zmdi-account material-icons-name"></i></label> <input
									type="text" name="posting_date" id="posting_date" placeholder="Posting Date" />
							</div>
							
							<div class="form-group">
								<label for="create_date"><i
									class="zmdi zmdi-account material-icons-name"></i></label> <input
									type="text" name="create_date" id="create_date" placeholder="Document Create Date" />
							</div>
							
							<div class="form-group">
								<label for="due_date"><i
									class="zmdi zmdi-account material-icons-name"></i></label> <input
									type="text" name="due_date" id="due_date" placeholder="Due Date" />
							</div>
							
							<div class="form-group">
								<label for="currency"><i
									class="zmdi zmdi-account material-icons-name"></i></label> <input
									type="text" name="currency" id="currency" placeholder="Invoice Currency" />
							</div>
							
							<div class="form-group">
								<label for="doc_type"><i
									class="zmdi zmdi-account material-icons-name"></i></label> <input
									type="text" name="doc_type" id="doc_type" placeholder="Document Type" />
							</div>
							
							<div class="form-group">
								<label for="posting_id"><i
									class="zmdi zmdi-account material-icons-name"></i></label> <input
									type="text" name="posting_id" id="posting_id" placeholder="Posting Id" />
							</div>
							
							<div class="form-group">
								<label for="tot_amount"><i
									class="zmdi zmdi-account material-icons-name"></i></label> <input
									type="text" name="tot_amount" id="tot_amount" placeholder="Total open Amount" />
							</div>
							
							<div class="form-group">
								<label for="baseline_date"><i
									class="zmdi zmdi-account material-icons-name"></i></label> <input
									type="text" name="baseline_date" id="baseline_date" placeholder="Baseline Create Date" />
							</div>
							
							<div class="form-group">
								<label for="payment_term"><i
									class="zmdi zmdi-account material-icons-name"></i></label> <input
									type="text" name="payment_term" id="payment_term" placeholder="Customer Payment Term" />
							</div>
							
							<div class="form-group">
								<label for="invoice_id"><i
									class="zmdi zmdi-account material-icons-name"></i></label> <input
									type="text" name="invoice_id" id="invoice_id" placeholder="Invoice Id" />
							</div>
							
					
							<div class="form-group">
								<input type="checkbox" name="agree-term" id="agree-term"
									class="agree-term" /> <label for="agree-term"
									class="label-agree-term"><span><span></span></span>I
									agree all statements in <a href="#" class="term-service">Terms
										of service</a></label>
							</div>
							<div class="form-group form-button">
								<input type="submit" name="signup" id="signup"
									class="form-submit" value="Register" />
							</div>
						</form>
					</div>
					<div class="signup-image">
						<figure>
							<img src="images/signup-image.jpg" alt="sing up image">
						</figure>
						<a href="login.jsp" class="signup-image-link">I am already
							member</a>
					</div>
				</div>
			</div>
		</section>


	</div>
	<!-- JS -->
	<script src="vendor/jquery/jquery.min.js"></script>
	<script src="js/main.js"></script>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	<link rel="stylesheet" href="alert/dist/sweetalert.css">

	<script type="text/javascript">
		var status = document.getElementById("status").value;
		if(status == "success") {
			swal("Congrats", "Account Created Successfully", "success");
		}
	</script>

</body>
<!-- This templates was made by Colorlib (https://colorlib.com) -->
</html>