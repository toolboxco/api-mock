
function handler(req, res) {
	res.status(201).json({ message: 'Success', feedback: "hi" });
}

export default handler;
