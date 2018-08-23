import React from 'react';
import './ImageLinkForm.css';



const ImageLinkForm = ({onInputChange, onButtonSubmit})=>{
	return (
		<div >
			<p className='fa3 '><strong>This Magic Brain will detect faces in your pictures. Gif it a try!</strong></p>
			<div className='center'>
				<div className=' form center pa4 br3 shadow-5'>
					<input className='fa4 pa2 w-70 center' type='text' onChange={onInputChange}/>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>
					Detect</button>
				</div>
			</div>	
		</div>

	);
}
export default ImageLinkForm;