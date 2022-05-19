import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import Cities from './Cities'

function ReservationsForm() {
	const url ="http://127.0.0.1:4000/reservations"
	const [data, setData] = useState ({
		user_id: "",
		psychologist_id: "",
		city_id: "",
		reservation_date: ""
	})
	function submit(e){
		e.preventDefault();
		Axios.post(url, {
			user_id: data.user_id,
			psychologist_id: data.psychologist_id,
			city_id: data.city_id,
			reservation_date: data.reservation_date
		})
			.then(res=>{
				console.log(res.data)
			})
	}


	function handle(e){
		const newData={...data}
		newData[e.target.id] = e.target.value
		setData(newData)
	}


	return (
		<div>
			<form onSubmit={(e)=> submit(e)}>
				<input onChange={(e)=>handle(e)} id="user_id" value={data.user_id} placeholder="user_id" type="text"></input>
				<input onChange={(e)=>handle(e)} id="psychologist_id" value={data.psychologist_id} placeholder="psychologist_id" type="text"></input>
				<Cities />
				<input onChange={(e)=>handle(e)} id="city_id" value={data.city_id} placeholder="city_id" type="text"></input>
				<input onChange={(e)=>handle(e)} id="reservation_date" value={data.reservation_date} placeholder="reservation_date" type="date"></input>
				
				<button>Create</button>
			</form>
		</div>
	);
}

export default ReservationsForm;