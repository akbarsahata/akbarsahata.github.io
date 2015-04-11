function cekPassword() {
	var pass1 = document.getElementById("pass1");
	var pass2 = document.getElementById("pass2");
		
	if (pass1.value == '') {
		document.getElementById("divPass1").className = 'form-group has-error';
		document.getElementById("peringatan2").innerHTML = '<div class="alert alert-danger" role="alert" style="margin-top: 12px; margin-bottom:-10px;"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><span class="sr-only">Error:</span> Harap isi password</div>';
		return false;
	} else if (pass2.value == '') {
		document.getElementById("divPass2").className = 'form-group has-error';
		document.getElementById("peringatan2").innerHTML = '<div class="alert alert-danger" role="alert" style="margin-top: 12px; margin-bottom:-10px;"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><span class="sr-only">Error:</span> Harap verifikasi password</div>';
		return false;
	} else if (pass2.value.length <= 4 || pass1.value.length <= 4) {
		document.getElementById("divPass1").className = 'form-group has-error';
		document.getElementById("divPass2").className = 'form-group has-error';
		document.getElementById("peringatan2").innerHTML = '<div class="alert alert-danger" role="alert" style="margin-top: 12px; margin-bottom:-10px;"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><span class="sr-only">Error:</span> Password harus lebih dari 4 karakter</div>';
		return false;
	}else if (pass1.value != pass2.value) {
		document.getElementById("divPass1").className = 'form-group has-error';
		document.getElementById("divPass2").className = 'form-group has-error';
		document.getElementById("tombol").innerHTML = '<input type="submit" class="btn btn-danger" name="submit" value="Cek isian anda" disabled>';
		document.getElementById("peringatan2").innerHTML = '<div class="alert alert-danger" role="alert" style="margin-top: 12px; margin-bottom:-10px;"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><span class="sr-only">Error:</span> Password tidak cocok</div>';
		return false;
	} else {
		document.getElementById("divPass1").className = 'form-group has-success';
		document.getElementById("divPass2").className = 'form-group has-success';
		//document.getElementById("tombol").innerHTML = '';
		document.getElementById("peringatan2").innerHTML = '';
		return true;	
	}
}