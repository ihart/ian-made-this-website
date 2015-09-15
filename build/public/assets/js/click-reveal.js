var IMT = IMT || {};


IMT.ClickReveal = function (el) {


	"use strict";


	var self = this,

		touch = (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) ? true : false,

		cls = 'is-active',

		id = el.getAttribute('data-click-reveal-target'),

		target = document.querySelector('[data-click-reveal-id="' + id + '"]'),

		setMarkup = function () {

			// Wrap each word with a span so we can maintain flow but use CSS transforms on words.
			var arrTarget = target.innerHTML.split(' '),
				length = arrTarget.length - 1,
				space = '';

			_.each(arrTarget, function (item, i) {

				space = (i === length) ? '' : '&nbsp;';

				// Add &nbsp; as simply using a whitespace will be ignored by the browser.
				arrTarget[i] = '<span>' + item + space + '</span>';

			});

			target.innerHTML = arrTarget.join('');

		},

		setListener = function () {

			var ev = (touch) ? 'touchend' : 'click';

			el.addEventListener(ev, function (e) {

				e.stopPropagation();

				target.classList.toggle(cls);
				el.classList.toggle(cls);

			});

		},

		initialise = function() {
		
			setMarkup();
			setListener();

		};


	initialise();


	return this;


};