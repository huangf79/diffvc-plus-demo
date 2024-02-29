/*Dropdown Menu*/
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
    var src = $('#sourceDropdown').find('input').val();
    var tgt = $('#targetDropdown').find('input').val();
    if (src === tgt) {
        alert("Please select different speakers.");
        return;
    }
	var vcpairhtml = ' \
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
				<td><b>Target</b></td> \
				<td><audio controls=""><source src="resources/audio/original/' + tgt + '/' + tgt + '_001.wav"></audio></td> \
				<td></td> \
				<td></td> \
				<td></td> \
				<td></td> \
			</tr> \
			<tr> \
				<td><br></td> \
			</tr> \
			<tr> \
				<td><br></td> \
			</tr> \
			<tr> \
				<td style="font-size: medium; text-align: right;">DiffVC (baseline)</td> \
				<td><audio controls=""><source src="resources/audio/diffvc/' + src + '/' + src + '_' + tgt + '_001.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/diffvc/' + src + '/' + src + '_' + tgt + '_002.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/diffvc/' + src + '/' + src + '_' + tgt + '_003.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/diffvc/' + src + '/' + src + '_' + tgt + '_004.wav"></audio></td>\
				<td><audio controls=""><source src="resources/audio/diffvc/' + src + '/' + src + '_' + tgt + '_005.wav"></audio></td>\
			</tr> \
			<tr> \
				<td><br></td> \
			</tr> \
			<tr> \
				<td style="font-size: medium; text-align: right;">DiffVC+</td> \
				<td><audio controls=""><source src="resources/audio/diffvcp/' + src + '/' + src + '_' + tgt + '_001.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/diffvcp/' + src + '/' + src + '_' + tgt + '_002.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/diffvcp/' + src + '/' + src + '_' + tgt + '_003.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/diffvcp/' + src + '/' + src + '_' + tgt + '_004.wav"></audio></td>\
				<td><audio controls=""><source src="resources/audio/diffvcp/' + src + '/' + src + '_' + tgt + '_005.wav"></audio></td>\
			</tr> \
			<tr> \
				<td><br></td> \
			</tr> \
			<tr> \
				<td style="font-size: medium; text-align: right;">DiffVC+ <i><b>light</b></i></td> \
				<td><audio controls=""><source src="resources/audio/diffvcpl/' + src + '/' + src + '_' + tgt + '_001.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/diffvcpl/' + src + '/' + src + '_' + tgt + '_002.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/diffvcpl/' + src + '/' + src + '_' + tgt + '_003.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/diffvcpl/' + src + '/' + src + '_' + tgt + '_004.wav"></audio></td>\
				<td><audio controls=""><source src="resources/audio/diffvcpl/' + src + '/' + src + '_' + tgt + '_005.wav"></audio></td>\
			</tr> \
			<tr> \
				<td><br></td> \
			</tr> \
			<tr> \
				<td style="font-size: medium; text-align: right;">DiffVC+ <i><b>light</b></i> streaming</td> \
				<td><audio controls=""><source src="resources/audio/diffvcpl_stream/' + src + '/' + src + '_' + tgt + '_001.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/diffvcpl_stream/' + src + '/' + src + '_' + tgt + '_002.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/diffvcpl_stream/' + src + '/' + src + '_' + tgt + '_003.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/diffvcpl_stream/' + src + '/' + src + '_' + tgt + '_004.wav"></audio></td>\
				<td><audio controls=""><source src="resources/audio/diffvcpl_stream/' + src + '/' + src + '_' + tgt + '_005.wav"></audio></td>\
			</tr> \
			<tr> \
				<td><br></td> \
			</tr> \
			<tr> \
				<td style="font-size: medium; text-align: right;">DiffVC+ <i><b>decoupled</b></i></td> \
				<td><audio controls=""><source src="resources/audio/diffvcpd/' + src + '/' + src + '_' + tgt + '_001.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/diffvcpd/' + src + '/' + src + '_' + tgt + '_002.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/diffvcpd/' + src + '/' + src + '_' + tgt + '_003.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/diffvcpd/' + src + '/' + src + '_' + tgt + '_004.wav"></audio></td>\
				<td><audio controls=""><source src="resources/audio/diffvcpd/' + src + '/' + src + '_' + tgt + '_005.wav"></audio></td>\
			</tr> \
			<tr> \
				<td><br></td> \
			</tr> \
		</tbody> \
	</table> \
	';
	$('.vcpair').html(vcpairhtml + '</div>');
});
