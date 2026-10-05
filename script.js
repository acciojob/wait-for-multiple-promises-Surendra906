//your JS code here. If required.
function createPromise(promiseName){
	const timeTaken=Math.random()*2+1;
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve({
				name:promiseName,
				time:timeTaken
			});
		},timeTaken*1000);
	});
}
const promise1=createPromise("promise 1");
const promise2=createPromise("promise 2");
const promise3=createPromise("promise 3");


promise.all([promise1,promise2,promise3]).then((results)=>{
	const outputElement=document.getElementById("output");
	outputElement.innerHTML="";

	const maxTimme=Math.max(...results.map((result)=>result.time));
	results.forEach((result)=>{
		const tr=document.createElement("tr");
		tr.innerHTML=`
		<td>${result.name}</td>
		<td>${result.time.toFixed(3)}</td>
		`;
		outputElement.appendChild(tr);
	});
	
	const totalTr=document.createElement("tr");
	totalTr.innerHTML=`
	<td>Total</td>
	<td>${totalTime.toFixed(3)}</td>
	`;
	outputElement.appendChild(totalTr);
})