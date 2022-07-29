import React from 'react'

class Reload extends React.Component{

    function refreshPage() {
		window.location.reload();
	}

    render(){
        return(
        	<div>
		    	<button onClick={refreshPage}>Click to reload!</button>
		    </div>    
        )  
    }
}

export default Reload;