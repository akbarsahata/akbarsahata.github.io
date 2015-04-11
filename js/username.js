function cekUsername(user) {
	if (user == "") {
		document.getElementById("peringatan").innerHTML = '<div class="alert alert-danger" role="alert" style="margin-top: 12px; margin-bottom:-10px;"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><span class="sr-only">Error:</span> Harap isi username</div>';
		document.getElementById("divUsername").className = 'form-group has-error';
		document.getElementById("tombol").innerHTML = '';
	}else if (user.length <= 6) {
		document.getElementById("peringatan").innerHTML = '<div class="alert alert-danger" role="alert" style="margin-top: 12px; margin-bottom:-10px;"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><span class="sr-only">Error:</span> Username harus lebih dari 5 karakter</div>';
		document.getElementById("divUsername").className = 'form-group has-error';
		document.getElementById("tombol").innerHTML = '';
	} else {
		document.getElementById("peringatan").innerHTML = '';
		document.getElementById("divUsername").className = 'form-group has-success';

		if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
		} else {// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				document.getElementById("peringatan").innerHTML = xmlhttp.responseText;
			}
			var tes = xmlhttp.responseText
			cekKetersediaan(tes);
		}
	}

	xmlhttp.open("GET", "library/cek_username.php?q=" + user, true);
	xmlhttp.send();
}

function cekKetersediaan(str) {
	if (str == '<div class="alert alert-danger" role="alert" style="margin-top: 12px; margin-bottom:-10px;"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><span class="sr-only">Error:</span> Username telah dipakai</div>'){
		document.getElementById("tombol").innerHTML = '<input type="submit" class="btn btn-danger" name="submit" value="Cek isian anda" disabled>';
		document.getElementById("divUsername").className = 'form-group has-error';
		return false;	
	} else {
		return true;
	}
}
