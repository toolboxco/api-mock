
const ELIGIBLE_SAMPLE =  {
	"brokerDetails": {
	  "name": "Swastika",
	  "logoUrl": "https://example.com/logo.png"
	},
	"brokingRegistrationPlans": [
	  {
		"id": "12345",
		"name": "Default",
		"registrationPlan": {
			fees: 300,
			registrationRequired: true
		},
		"brokingPlan": {
		  "intraday": {
			"price": 20,
	
		  },
		  "fno": {
			"price": 20,

		  },
		  "delivery": {
			"price": 200,
		  }
		},
		"meta": {
		  "mintCoinMultiplier": 5
		}
	  },
	],
	"currentUserState": {
	  "status": "ELIGIBLE",
	  "statusData": {}
	}
}

const stage = {
	ELIGIBLE:ELIGIBLE_SAMPLE
}
function handler(req, res) {
	res.status(200).json(stage.ELIGIBLE);
}

export default handler;
