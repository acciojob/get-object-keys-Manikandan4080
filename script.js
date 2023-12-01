//your JS code here. If required.
let student = {name:"name"};
Object.prototype.getKeys= function(){
	let ans=[];
	for(let i in this){
	if (this.hasOwnProperty(i)) {
		ans.push(i);
	}
}
	return ans;
}