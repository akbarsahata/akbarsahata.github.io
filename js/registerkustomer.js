function cekEmail() {
				var email = document.getElementById("email");
				var email2= document.getElementById("email2");
				 
				if (email.value == "") {
					document.getElementById("cekEmail").innerHTML = '';
				}
				else if (email2.value == "") {
					document.getElementById("cekEmail").innerHTML = '';
				}
				else if (email.value == email2.value) {
					document.getElementById("cekEmail").innerHTML = '<div class="alert alert-success" role="alert" style="margin-top: 12px; margin-bottom:-10px;"><span class="glyphicon glyphicon-ok" aria-hidder="true"></span> Email sudah benar</div>';
				}
				else {
					document.getElementById("cekEmail").innerHTML = '<div class="alert alert-danger" role="alert" style="margin-top: 12px; margin-bottom:-10px;"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><span class="sr-only">Error:</span> Email tidak cocok</div>';
				}
			}
			function cekEmailLagi() {
				var email = document.getElementById("email");
				var email2= document.getElementById("email2");
				
				if (email.value == email2.value) {
					document.getElementById("tombol").innerHTML='<input type="submit" class="btn btn-primary" name="submit" value="Daftar">';
				}
				else if (email.value == '') {
					document.getElementById("tombol").innerHTML='';
				}
				else if (email2.value == '') {
					document.getElementById("tombol").innerHTML='';
				}
				else {
					document.getElementById("tombol").innerHTML='<input type="submit" class="btn btn-danger" name="submit" value="Cek isian anda" disabled>';
				}
			}