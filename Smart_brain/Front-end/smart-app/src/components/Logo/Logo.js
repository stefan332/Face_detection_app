import React from 'react';
import './logo.css';
import brain from './brain.png';


const Logo = ()=>{
	return (
		<div className ='ma3 mt0'>
			<div className="left br2 shadow-2">
				<div className='pa4'><img alt ='logo' src={brain}/></div>
			</div>
		</div>

	);
}
export default Logo;