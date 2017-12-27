const schedule = require("node-schedule");
const notifier = require("node-notifier");
const isLinux = require("is-linux");

schedule.scheduleJob("*/1 * * * *", function() {
	if (isLinux()) {
		notifier.notify({
			title: "DRINK WATER",
			message: "Its time to Drink Water 🍹"
		});
		return;
	}
	const trueAnswer = "Yes !";
	notifier.notify(
		{
			title: "DRINK WATER",
			message: "Did you Drink 🍹 Water 🚰 ❓",
			actions: trueAnswer
		},
		function(err, response, metadata) {
			if (err) throw err;
			if (metadata.activationValue !== trueAnswer) {
				notifier.notify({
					title: "DRINK WATER",
					message: "Then let's code, Champ 😉 !!"
				});
			} else {
				notifier.notify({
					title: "DRINK WATER",
					message: "Please drink water now or you'll get dehydrated  🚑 "
				});
			}
		}
	);
});
