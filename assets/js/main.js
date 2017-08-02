window.onload = function () {
	'use strict';
	
	/*==function play sound==*/	
	function playSound (data) {
	    const audio = document.querySelector(`audio[data-key="${data.keyCode}"]`);/*==selecting and audio element for when a key is pressed==*/
		 const key = document.querySelector(`.key[data-key="${data.keyCode}"]`);/*==selecting a specific class per key pressed==*/

		if (!audio) return;/*==Stopping the function all together when the wrong key is pressed==*/
		audio.currentTime = 0;/*==Rewinding the audio back too the start==*/
		audio.play();/*==Playing the audio when a key is pressed==*/
		key.classList.add('playing')/*==adding animation to the key classes on key press==*/
	};
	/*==End of function play sound==*/						
							
							
	const keys = document.querySelectorAll('.key');/*==Selecting all elements with class key==*/
	
	/*==Function for removing transition==*/
	function removeTransition (e) {
		if (e.propertyName !== 'transform') return;/*==skip it if its not transform property==*/
		this.classList.remove('playing')
	};
	/*==End of Function for removing transition==*/

	/*==looping through the keys Nodelist and adding a function for each of them==*/
	keys.forEach(key => key.addEventListener('transitionend', removeTransition));
	/*==End of looping through the keys Nodelist and adding a function for each of them==*/
	/*==Event listener for when a key is being pressed on the dom==*/
	window.addEventListener('keydown', playSound);
	/*==End of Event listener for when a key is being pressed==*/
};