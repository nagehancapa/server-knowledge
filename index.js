const express = require('express')
const app = express()

function render(message) {
	const document = `<html>
	  <head>
		</head>
		<body>
		  <h1>${message}</h1>
		</body>
	</html>`
	return document
}

app.get(
  '/know/:subject',
	(request, response) => {
		const message = `I know ${request.params.subject}`
		const page = render(message)
		response.send(page)
	}
)

const port = 3000
app.listen(
  port,
  () => console.log(`Listening on :${port}`)
)