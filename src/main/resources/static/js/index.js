let marsApiButtons = document.querySelectorAll("button[id*='marsApi']")


	marsApiButtons.forEach(button => button.addEventListener('click', function(){
	
                            	         const buttonId = this.id
                            	         const roverId = buttonId.split('marsApi')[1]
                            	         let apiData = document.getElementById('marsApiRoverData')
                            	         apiData.value = roverId
                            	         document.getElementById('frmRoverType').submit()
	                                    }))	
	                                    
	                                    
	function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };                                   

    let marsRoverType = getUrlParameter('marsApiRoverData')
    if(marsRoverType==''){
		marsRoverType = 'Curiosity'
	}
	
	let marsSol = getUrlParameter('marsSol')
	document.getElementById('marsSol').value = marsSol
    
    highlightBtnByRoverType(marsRoverType)
	
	function highlightBtnByRoverType(roverType){
		if(marsRoverType==''){
		marsRoverType = 'Curiosity'
	    }
		document.getElementById('marsApi' + roverType).classList.remove('btn-secondary')
		document.getElementById('marsApi' + roverType).classList.add('btn-primary')
	}
	