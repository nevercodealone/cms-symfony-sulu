$(function(){
	$(".ContactForm-01").submit(function(){
		$(".submitf-01").value='Please wait...';
		
		$.post("process.php?send=comments", $(".ContactForm-01").serialize(),
		function(data){
			if(data.frm_check == 'error'){ 
			
					$(".message_post-01").html("<div class='errorMessage'>ERROR: " + data.msg + "!</div>"); 
					document.ContactForm.submitf.value='Resend >>';
					document.ContactForm.submitf.disabled=false;
			} else {
				$(".message_post-01").html("<div class='successMessage'>Your message has been sent successfully!</div>"); 
				$('.form-control').val("");
				$(".submitf-01").value='Send >>';
				}
		}, "json");
		
		return false;
		
	});
});

$(function(){
	$(".ContactForm-02").submit(function(){
		$(".submitf-02").value='Please wait...';
		
		$.post("process.php?send=comments", $(".ContactForm-02").serialize(),
		function(data){
			if(data.frm_check == 'error'){ 
			
					$(".message_post-02").html("<div class='errorMessage'>ERROR: " + data.msg + "!</div>"); 
					document.ContactForm.submitf.value='Resend >>';
					document.ContactForm.submitf.disabled=false;
			} else {
				$(".message_post-02").html("<div class='successMessage'>Your message has been sent successfully!</div>"); 
				$('.form-control').val("");
				$(".submitf-02").value='Send >>';
				}
		}, "json");
		
		return false;
		
	});
});

$(function(){
	$(".ContactForm-03").submit(function(){
		$(".submitf-03").value='Please wait...';
		
		$.post("process.php?send=comments", $(".ContactForm-03").serialize(),
		function(data){
			if(data.frm_check == 'error'){ 
			
					$(".message_post-03").html("<div class='errorMessage'>ERROR: " + data.msg + "!</div>"); 
					document.ContactForm.submitf.value='Resend >>';
					document.ContactForm.submitf.disabled=false;
			} else {
				$(".message_post-03").html("<div class='successMessage'>Your message has been sent successfully!</div>"); 
				$('.form-control').val("");
				$(".submitf-03").value='Send >>';
				}
		}, "json");
		
		return false;
		
	});
});

$(function(){
	$(".ContactForm-04").submit(function(){
		$(".submitf-04").value='Please wait...';
		
		$.post("process.php?send=comments", $(".ContactForm-04").serialize(),
		function(data){
			if(data.frm_check == 'error'){ 
			
					$(".message_post-04").html("<div class='errorMessage'>ERROR: " + data.msg + "!</div>"); 
					document.ContactForm.submitf.value='Resend >>';
					document.ContactForm.submitf.disabled=false;
			} else {
				$(".message_post-04").html("<div class='successMessage'>Your message has been sent successfully!</div>"); 
				$('.form-control').val("");
				$(".submitf-04").value='Send >>';
				}
		}, "json");
		
		return false;
		
	});
});

$(function(){
	$(".ContactForm-05").submit(function(){
		$(".submitf-05").value='Please wait...';
		
		$.post("process.php?send=comments", $(".ContactForm-05").serialize(),
		function(data){
			if(data.frm_check == 'error'){ 
			
					$(".message_post-05").html("<div class='errorMessage'>ERROR: " + data.msg + "!</div>"); 
					document.ContactForm.submitf.value='Resend >>';
					document.ContactForm.submitf.disabled=false;
			} else {
				$(".message_post-05").html("<div class='successMessage'>Your message has been sent successfully!</div>"); 
				$('.form-control').val("");
				$(".submitf-05").value='Send >>';
				}
		}, "json");
		
		return false;
		
	});
});


$(function(){
	$(".ContactForm-06").submit(function(){
		$(".submitf-06").value='Please wait...';
		
		$.post("process.php?send=comments", $(".ContactForm-06").serialize(),
		function(data){
			if(data.frm_check == 'error'){ 
			
					$(".message_post-06").html("<div class='errorMessage'>ERROR: " + data.msg + "!</div>"); 
					document.ContactForm.submitf.value='Resend >>';
					document.ContactForm.submitf.disabled=false;
			} else {
				$(".message_post-06").html("<div class='successMessage'>Your message has been sent successfully!</div>"); 
				$('.form-control').val("");
				$(".submitf-06").value='Send >>';
				}
		}, "json");
		
		return false;
		
	});
});

$(function(){
	$(".ContactForm-07").submit(function(){
		$(".submitf-07").value='Please wait...';
		
		$.post("process.php?send=comments", $(".ContactForm-07").serialize(),
		function(data){
			if(data.frm_check == 'error'){ 
			
					$(".message_post-07").html("<div class='errorMessage'>ERROR: " + data.msg + "!</div>"); 
					document.ContactForm.submitf.value='Resend >>';
					document.ContactForm.submitf.disabled=false;
			} else {
				$(".message_post-07").html("<div class='successMessage'>Your message has been sent successfully!</div>"); 
				$('.form-control').val("");
				$(".submitf-07").value='Send >>';
				}
		}, "json");
		
		return false;
		
	});
});

$(function(){
	$(".ContactForm-08").submit(function(){
		$(".submitf-08").value='Please wait...';
		
		$.post("process.php?send=comments", $(".ContactForm-08").serialize(),
		function(data){
			if(data.frm_check == 'error'){ 
			
					$(".message_post-08").html("<div class='errorMessage'>ERROR: " + data.msg + "!</div>"); 
					document.ContactForm.submitf.value='Resend >>';
					document.ContactForm.submitf.disabled=false;
			} else {
				$(".message_post-08").html("<div class='successMessage'>Your message has been sent successfully!</div>"); 
				$('.form-control').val("");
				$(".submitf-08").value='Send >>';
				}
		}, "json");
		
		return false;
		
	});
});


$(function(){
	$(".ContactForm-09").submit(function(){
		$(".submitf-09").value='Please wait...';
		
		$.post("process.php?send=comments", $(".ContactForm-09").serialize(),
		function(data){
			if(data.frm_check == 'error'){ 
			
					$(".message_post-09").html("<div class='errorMessage'>ERROR: " + data.msg + "!</div>"); 
					document.ContactForm.submitf.value='Resend >>';
					document.ContactForm.submitf.disabled=false;
			} else {
				$(".message_post-09").html("<div class='successMessage'>Your message has been sent successfully!</div>"); 
				$('.form-control').val("");
				$(".submitf-09").value='Send >>';
				}
		}, "json");
		
		return false;
		
	});
});

$(function(){
	$(".ContactForm-10").submit(function(){
		$(".submitf-10").value='Please wait...';
		
		$.post("process.php?send=comments", $(".ContactForm-10").serialize(),
		function(data){
			if(data.frm_check == 'error'){ 
			
					$(".message_post-10").html("<div class='errorMessage'>ERROR: " + data.msg + "!</div>"); 
					document.ContactForm.submitf.value='Resend >>';
					document.ContactForm.submitf.disabled=false;
			} else {
				$(".message_post-10").html("<div class='successMessage'>Your message has been sent successfully!</div>"); 
				$('.form-control').val("");
				$(".submitf-10").value='Send >>';
				}
		}, "json");
		
		return false;
		
	});
});

$(function(){
	$(".ContactForm-11").submit(function(){
		$(".submitf-11").value='Please wait...';
		
		$.post("process.php?send=comments", $(".ContactForm-11").serialize(),
		function(data){
			if(data.frm_check == 'error'){ 
			
					$(".message_post-11").html("<div class='errorMessage'>ERROR: " + data.msg + "!</div>"); 
					document.ContactForm.submitf.value='Resend >>';
					document.ContactForm.submitf.disabled=false;
			} else {
				$(".message_post-11").html("<div class='successMessage'>Your message has been sent successfully!</div>"); 
				$('.form-control').val("");
				$(".submitf-11").value='Send >>';
				}
		}, "json");
		
		return false;
		
	});
});

