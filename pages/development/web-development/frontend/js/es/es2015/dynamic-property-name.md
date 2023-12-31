# Dynamic property name
``` javascript
let lastName = "姓",
	fristName = "名"

const obj = {
	demo: "sdf",
	eat() {
		console.log("eat")
	},
	[lastName + fristName]: "Scoheart"
}

console.dir(obj)
```