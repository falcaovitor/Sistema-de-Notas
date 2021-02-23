$('.open a').on('click', function()
{
	$('#modal').hide().fadeIn(1200 )
})
$('.header span a').on('click', function()
{
	$('#modal').fadeOut(1200)
})
var open_modal = document.querySelector('.open a')
var modal = document.querySelector('#modal')
var close_modal = document.querySelector('#modal .header span a')
var video_stop = document.querySelector('#modal .media video')
open_modal.addEventListener('click', function()
{
	modal.classList.remove('hide')
})
close_modal.addEventListener('click', function()
{
	modal.classList.add('hide')
	video_stop.pause()
})