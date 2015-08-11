$(document).ready(function(){
	jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});
$( "#loginForm" ).validate({
  rules: {
    emailAddress: {
      required: true,
      email: true
    },
	password: {
		required: true
	}
  },
  submitHandler: function() {
	window.location.href='policyDetailsForm.htm';
	return false;
 }
/*errorPlacement: function(error, element) {
							  var elementId = element.attr("id");
							  console.log("elementId "+elementId);
							  console.log("error.text() "+error.text());
							  if(elementId==("fullName")){
									var errContainerID = elementId + "_div_cl_err";
									if(!$('#' + errContainerID).length) {
										var errorDiv = '<div id="' + errContainerID +  '">'+error.text()+'</div></div>';
										element.after(errorDiv);
								}
					}
			  }*/
});

	/*$('#emailAddress ').focus(function(){
		if (this.value == 'E-mail address'){
			this.value = '';
		}
	});
	$('#emailAddress').blur(function(){
		if (this.value == '') {
			this.value = 'E-mail address';
		}
	});
	$('#password ').focus(function(){
		if (this.value == 'Password'){
			this.value = '';
		}
	});
	$('#password').blur(function(){
		if (this.value == '') {
			this.value = 'Password';
		}
	});
	$('#btnInsportLogin').click(function(){
		//if($('#emailAddress').val() == 'test@test.com' && $('#password').val() == 'test') {
			window.location.href='policyDetailsForm.htm';
		/*} else {
			$('#loginErrorMessage').html("Invalid email address/password");
		}
	    return false;
	});*/

	$('#btnRegister').click(function(){
	    window.location.href='policyDetailsForm.htm';
	    return false;
	});

	$('#btn-get-policy-details').click(function(){
			//var url = "http://127.0.0.1:3000/policies/1";
			//$.getJSON(url, function(data){
			//    alert("Data Loaded: " + data);
		    //});

		    /*$.getJSON(
			'http://localhost:3000/policies/1?v=1&key=dummykey&tag=test&offset=0&length=20&callback=?&minx=-30&miny=0&maxx=0&maxy=150',
			{ id: '1' },
			function(jsonData) {
			  console.log('inside jsonData');
			  alert(jsonData);
			});*/


		    $.ajax({
			        url:            'http://localhost:3000/policies/2',
//			        data:           "{ 'id': '1' }",
			        //crossDomain: true,
			        async:false,
			        //dataType:       'jsonp',
			        contentType:    'application/json',
			        success: function (data) {
						console.log('inside success');
					    alert(JSON.stringify(data));
					},
					error: function (error) {
						console.log('inside error');
					    alert(JSON.stringify(error));
					}
    		})
    		/*.done(function(data){
				console.log('inside done');
        		return data;
    		})
		    .fail(function(jqXHR) {
		        console.log('inside fail');
		        alert(jqXHR);
		        //var data = jQuery.parseJSON(jqXHR.responseText);
		        //return data;
		    })*/;

		    window.location.href='policyResultsForm.htm';
		    return false;
	});

	$('#get-indicative-quote').click(function(){
			    window.location.href='indicativeQuotes.html';
			    return false;
	});

	 $("#indicativeQ1").click(function() {
	         window.location.href='detailedQuote.html';
    });
    $("#indicativeQ2").click(function() {
		         window.location.href='detailedQuote.html';
    });
    $("#indicativeQ3").click(function() {
		         window.location.href='detailedQuote.html';
    });
	$("#confirm-quote").click(function() {
		         window.location.href='confirmation.html';
    });

});
