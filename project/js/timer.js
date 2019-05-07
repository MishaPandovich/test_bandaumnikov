(function() {
var hour = document.querySelector('.timer__item--hour'),
		min  = document.querySelector('.timer__item--minutes'),
		sec  = document.querySelector('.timer__item--seconds');
		lastDay  = 11, // укажите день окончания акции .. 11 мая
		lastHours = 12; // во сколько часов она дожна закончится

function getRestHours() {
/*получение оставшегося времени акции*/
	var today 		 = new Date().getDate(),
			todayHours = new Date().getHours();

	var restDay   = lastDay - today,
			restHours = lastHours - todayHours;

	if ((restDay <= 0) && ((restHours <= 0) || (restHours == 1))) {
		return 0;
	}	else {
		return restHours < 0 ? ((restDay * 24) + restHours) - 1 : ((restDay * 24) - restHours) - 1;
	}
}

var restHours = getRestHours();

var reserveTimer = setInterval(function() {
	var now = new Date();
	var hours = now.getHours() + restHours;

	var h = hours - now.getHours(),
			m = 59 - now.getMinutes(), 
			s = 60 - now.getSeconds(); 

	if ((h <= 0) && (m <= 0)) {
		hour.textContent = '00';
		min.textContent  = '00';
		sec.textContent  = '00';
		clearInterval(reserveTimer);
	} else {
		h < 10 ? hour.textContent = '0' + h : hour.textContent = h;
		m < 10 ? min.textContent 	= '0' + m : min.textContent = m;
		s < 10 ? sec.textContent 	= '0' + s : sec.textContent = s;
	}
}, 1000);
})();

// !минуты не доделаны