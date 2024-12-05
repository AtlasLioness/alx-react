import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>ALX Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append(`<p id="count"></p>`);
$('body').append('<p>Copyright - ALX</p>');

let count = 0;

$('button').on('click', _.debounce(updateCounter, 500));

function updateCounter() {
	count++;
	$('#count').text(`${count} clicks on the button`);
}
