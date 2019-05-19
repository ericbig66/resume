var colors = [
				['#D3B6C6', '#4B253A'], ['#FCE6A4', '#EFB917'], ['#BEE3F7', '#45AEEA'], ['#F8F9B6', '#D2D558'], ['#F4BCBF', '#D43A43']
			],
			circles = [];

		for (var i = 1; i <= 5; i++) {
			var child = document.getElementById('skill-' + i),
				percentage0 = document.getElementById('percent-' + i).innerHTML,
				percentage = parseInt(percentage0),
				circle = Circles.create({
					id:         child.id,
					value:      percentage,
					radius:     getWidth(),
					width:      15,
					colors:     colors[i - 1]
				});
			//alert(percentage0);
			circles.push(circle);
		}

		window.onresize = function(e) {
			for (var i = 0; i < circles.length; i++) {
				circles[i].updateRadius(getWidth());
			}
		};

		function getWidth() {
			return window.innerWidth / 30;
		}