/*Dropdown Menu*/
$('.dropdown1').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown1').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown1 .dropdown-menu li').click(function () {
    $(this).parents('.dropdown1').find('span').text($(this).text());
    $(this).parents('.dropdown1').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
    var src = $('#sourceDropdown1').find('input').val();
	var vcpair1html = ' \
	<table class="wrapper"> \
		<tbody style="margin-right: auto; text-align: center;"> \
			<tr> \
				<td></td> \
				<td>001</td> \
				<td>002</td> \
				<td>003</td> \
				<td>004</td> \
				<td>005</td> \
			</tr> \
			<tr> \
				<td><b>Source</b></td> \
				<td><audio controls=""><source src="resources/audio/original/' + src + '/' + src + '_001.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/original/' + src + '/' + src + '_002.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/original/' + src + '/' + src + '_003.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/original/' + src + '/' + src + '_004.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/original/' + src + '/' + src + '_005.wav"></audio></td> \
			</tr> \
			<tr> \
				<td><br></td> \
			</tr> \
			<tr> \
				<td><br></td> \
			</tr> \
			<tr> \
				<td style="font-size: medium; text-align: right;">DiffVC+</td> \
				<td><audio controls=""><source src="resources/audio/notgt/diffvcp/' + src + '/' + src + '_eg_001.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/notgt/diffvcp/' + src + '/' + src + '_eg_002.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/notgt/diffvcp/' + src + '/' + src + '_eg_003.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/notgt/diffvcp/' + src + '/' + src + '_eg_004.wav"></audio></td>\
				<td><audio controls=""><source src="resources/audio/notgt/diffvcp/' + src + '/' + src + '_eg_005.wav"></audio></td>\
			</tr> \
			<tr> \
				<td><br></td> \
			</tr> \
			<tr> \
				<td style="font-size: medium; text-align: right;">DiffVC+ <i><b>light</b></i></td> \
				<td><audio controls=""><source src="resources/audio/notgt/diffvcpl/' + src + '/' + src + '_eg_001.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/notgt/diffvcpl/' + src + '/' + src + '_eg_002.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/notgt/diffvcpl/' + src + '/' + src + '_eg_003.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/notgt/diffvcpl/' + src + '/' + src + '_eg_004.wav"></audio></td>\
				<td><audio controls=""><source src="resources/audio/notgt/diffvcpl/' + src + '/' + src + '_eg_005.wav"></audio></td>\
			</tr> \
			<tr> \
				<td><br></td> \
			</tr> \
			<tr> \
				<td style="font-size: medium; text-align: right;">DiffVC+ <i><b>decoupled</b></i></td> \
				<td><audio controls=""><source src="resources/audio/notgt/diffvcpd/' + src + '/' + src + '_eg_001.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/notgt/diffvcpd/' + src + '/' + src + '_eg_002.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/notgt/diffvcpd/' + src + '/' + src + '_eg_003.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/notgt/diffvcpd/' + src + '/' + src + '_eg_004.wav"></audio></td>\
				<td><audio controls=""><source src="resources/audio/notgt/diffvcpd/' + src + '/' + src + '_eg_005.wav"></audio></td>\
			</tr> \
			<tr> \
				<td><br></td> \
			</tr> \
			<tr> \
				<td style="font-size: medium; text-align: right;">DiffVC+ <i><b>decoupled</b></i> uncond</td> \
				<td><audio controls=""><source src="resources/audio/notgt/diffvcpd_uc/' + src + '/' + src + '_uc_001.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/notgt/diffvcpd_uc/' + src + '/' + src + '_uc_002.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/notgt/diffvcpd_uc/' + src + '/' + src + '_uc_003.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/notgt/diffvcpd_uc/' + src + '/' + src + '_uc_004.wav"></audio></td>\
				<td><audio controls=""><source src="resources/audio/notgt/diffvcpd_uc/' + src + '/' + src + '_uc_005.wav"></audio></td>\
			</tr> \
			<tr> \
				<td><br></td> \
			</tr> \
		</tbody> \
	</table> \
	';
	$('.vcpair1').html(vcpair1html + '</div>');
});
