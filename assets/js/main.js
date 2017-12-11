function setMaximun(maxNum){
				if (typeof(Storage) !== "undefined") {
					sessionStorage.setItem("maxNum", maxNum);
				}
				$('#guess').show();
				$('#select-pg').hide();
				$('#jst-title').hide();
				$('#main-title').show();
				if(maxNum == 10){
					responsiveVoice.speak("you chooses normal level, Good luck.");
				}else if(maxNum == 50){
					responsiveVoice.speak("you chooses medium level, Good luck.");
				}
				else{
					responsiveVoice.speak("you chooses hard level, Good luck.");
				}
			}

            angular.module('guessApp', ['ui-notification']);
            angular.module('guessApp').controller('guessController', function($scope, Notification) {
                var counter= 0;
				var randomNumber;
				$scope.DisplayUpdate = true;
                $scope.guessTheNumber = function() {
					counter = counter + 1;
					var guess =$scope.number;
					var max;
					if (typeof(Storage) !== "undefined") {					
						 max= sessionStorage.getItem("maxNum");
					}else{
						 max=10;
					}
					var min=0;
					var msgless = "Number is < "+guess
					var msggrt = "Number is > "+guess
					if(counter == 1){
						randomNumber = Math.floor(Math.random()*(max-min+1)+min);
					}
					
					if(counter < 6){
						$('#span-'+counter).addClass('step-act');
						if(randomNumber > guess){
							$('#text').val(' ');
							responsiveVoice.speak(msggrt);
							Notification.info({message: ' Number is > '+guess, positionY: 'bottom', positionX: 'right', delay: null});
						}else if(randomNumber < guess){
							$('#text').val(' ');
							responsiveVoice.speak(msgless);
							Notification.info({message: ' Number is < '+guess, positionY: 'bottom', positionX: 'left', delay: null});
						}else{
							$('#text').val(' ');
							$('.thenumber').text(randomNumber);
							$('#guess').hide();
							$('#correct').show();
							$(document.body).addClass('bg-correct');
							$('#guess-count').text(counter)
							counter= 0;
							Notification.clearAll();
						}
					}else{
						$('#text').val(' ');
						$('.thenumber').text(randomNumber);
						$(document.body).addClass('bg-error');
						$('#guess').hide(); $('#error').show();
						counter= 0;
						Notification.clearAll();
					}
                    
					
                };     
               
            });
			function tryAgin(){
				$('#guess').show();
				$('#correct').hide(); $('#error').hide();
				$(document.body).removeClass('bg-correct');
				$(document.body).removeClass('bg-error');
				$('.step').removeClass('step-act');
			}