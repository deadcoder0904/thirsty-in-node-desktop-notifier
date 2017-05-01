var schedule = require('node-schedule');
var notifier = require('node-notifier');
var isLinux = require('is-linux');

var j = schedule.scheduleJob('* */2 * * *', function(){
	if(isLinux()) {
		notifier.notify(
		  {
		    title: 'DRINK WATER',
		    message: 'Its time to Drink Water 🍹'
		  }
		);
		return;
	}
	var trueAnswer = 'Yes !';
	notifier.notify(
	  {
	    title: 'DRINK WATER',
	    message: 'Did you Drink Water 🍹 ?',
	    actions: trueAnswer
	  },
	  function(err, response,metadata) {
	    if (err) throw err;

	    if (metadata.activationValue !== trueAnswer) {
	    	notifier.notify({
			  'title': 'DRINK WATER',
			  'message': 'Then let\'s code, Champ 😉 !!'
			});
	    }
	    else {
	    	notifier.notify({
			  'title': 'DRINK WATER',
			  'message': 'Please drink water now or you\'ll get dehydrated  🚑 '
			});
	    }
	  }
	);
});
