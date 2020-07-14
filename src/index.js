// change require to es6 import style
import $ from 'jquery';
import './style.scss'

let time = 0
$('#main').html(`You've been on this page for ${time} seconds.`);
setInterval(function(){
    time = time + 1;
    $('#main').html(`You've been on this page for ${time} seconds.`);
}, 1000);