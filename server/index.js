const express = require("express");
const cors = require("cors");
const Axios = require("axios");
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.post("/compile", (req, res) => {
	//getting the required data from the request
	let code = req.body.code;
	let language = req.body.language;
	let input = req.body.input;

    console.log(language);

	if (language === "python") {
		language = "py"
	}
	if (language === "Java") {
		language = "java"
	}
	if (language === "c++") {
		language = "cpp"
	}
	if (language === "C") {
		language = "c"
	}
	if (language === "c#") {
		language = "cs"
	}
	if (language === "NodeJs") {
		language = "js"
	}


	let data = ({
		"code": code,
		"language": language,
		"input": input
	});
	// console.log(data);
	let config = {
		method: 'post',
		url: 'https://api.codex.jaagrav.in',
		headers: {
			'Content-Type': 'application/json'
		},
		data: data
	};
	// console.log(config);
	//calling the code compilation API
	Axios(config)
		.then((response) => {
			console.log(response.data);
			res.send(response.data)
			// console.log("hello")
		}).catch((error) => {
			console.log(error);
		});
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
