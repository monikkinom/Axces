(function() {
				// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
				if (!String.prototype.trim) {
					(function() {
						// Make sure we trim BOM and NBSP
						var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
						String.prototype.trim = function() {
							return this.replace(rtrim, '');
						};
					})();
				}

				[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
					// in case the input is already filled..
					if( inputEl.value.trim() !== '' ) {
						classie.add( inputEl.parentNode, 'input--filled' );
					}

					// events:
					inputEl.addEventListener( 'focus', onInputFocus );
					inputEl.addEventListener( 'blur', onInputBlur );
				} );

				function onInputFocus( ev ) {
					classie.add( ev.target.parentNode, 'input--filled' );
				}

				function onInputBlur( ev ) {
					if( ev.target.value.trim() === '' ) {
						classie.remove( ev.target.parentNode, 'input--filled' );
					}
				}
			})();


(function() {
        [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
            new SelectFx(el,{
                onChange : function( val ) { if(val=='Other'){
                    $('.spanspecify').removeClass('hide1');
                    $('.spanspecify').addClass('show1');
                }
                    else{
                    $('.spanspecify').addClass('hide1');
                    $('.spanspecify').removeClass('show1');
                }
                    return false;
                }
            });
        } );
    })();


$(document).ready(function(){
//    document.getElementById('dropdowncat1').addEventListener('onChange',function(e){
//		console.log('hu');
//	});


    $('#uploadimage').click(function(){
       $('#fakeupd').click();
    });

    $('#fakeupd').change(function(){
        var input = this;
        if(input.files && input.files[0]){
            var reader = new FileReader();
            reader.onload = function(e){
                $('#uploadimage').attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    });

    $('#submitbtn').click(function(e){

        var notification = new NotificationFx({
							message : '<span class="icon icon-settings"></span><p>Your application has been detected as Low Risk, For credentials & development kit follow the email we sent you</p>',
							layout : 'bar',
							effect : 'exploader',
							ttl : 9000000,
							type : 'notice', // notice, warning or error
							onClose : function() {

							}
						});

						// show the notification
						notification.show();

    });
});


