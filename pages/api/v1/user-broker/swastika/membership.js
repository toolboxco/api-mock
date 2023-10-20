
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
			price: 300,
			registrationRequired: true
		},
		"brokingPlan": {
		  "intraday": {
			"price": 10,
	
		  },
		  "fno": {
			"price": 10,

		  },
		  "delivery": {
			"price": 10,
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


const NOT_ELIGIBLE_SAMPLE =  {
	"brokerDetails": {
	  "name": "Swastika",
	  "logoUrl": "https://example.com/logo.png"
	},
	"brokingRegistrationPlans": [
	  {
		"id": "12345",
		"name": "Default",
		"registrationPlan": {
			price: 300,
			registrationRequired: true
		},
		"brokingPlan": {
		  "intraday": {
			"price": 10,
	
		  },
		  "fno": {
			"price": 10,

		  },
		  "delivery": {
			"price": 10,
		  }
		},
		"meta": {
		  "mintCoinMultiplier": 5
		}
	  },
	],
	"currentUserState": {
	  "status": "NOT_ELIGIBLE",
	  "statusData": {}
	}
}

const JOINED_WAITLIST_SAMPLE =  {
	"brokerDetails": {
	  "name": "Swastika",
	  "logoUrl": "https://example.com/logo.png"
	},
	"brokingRegistrationPlans": [
	  {
		"id": "12345",
		"name": "Default",
		"registrationPlan": {
			price: 300,
			registrationRequired: true
		},
		"brokingPlan": {
		  "intraday": {
			"price": 10,
	
		  },
		  "fno": {
			"price": 10,

		  },
		  "delivery": {
			"price": 10,
		  }
		},
		"meta": {
		  "mintCoinMultiplier": 5
		}
	  },
	],
	"currentUserState": {
	  "status": "JOINED_WAITLIST",
	  "statusData": {}
	}
}

const PAYMENT_INIT =  {
	"brokerDetails": {
	  "name": "Swastika",
	  "logoUrl": "https://example.com/logo.png"
	},
	"brokingRegistrationPlans": [
	  {
		"id": "12345",
		"name": "Default",
		"registrationPlan": {
			price: 300,
			registrationRequired: true
		},
		"brokingPlan": {
		  "intraday": {
			"price": 10,
	
		  },
		  "fno": {
			"price": 10,

		  },
		  "delivery": {
			"price": 10,
		  }
		},
		"meta": {
		  "mintCoinMultiplier": 5
		}
	  },
	],
	"currentUserState": {
	  "status": "PAYMENT_INIT",
	  "statusData": {}
	}
}

const PAYMENT_FAILED =  {
	"brokerDetails": {
	  "name": "Swastika",
	  "logoUrl": "https://example.com/logo.png"
	},
	"brokingRegistrationPlans": [
	  {
		"id": "12345",
		"name": "Default",
		"registrationPlan": {
			price: 300,
			registrationRequired: true
		},
		"brokingPlan": {
		  "intraday": {
			"price": 10,
	
		  },
		  "fno": {
			"price": 10,

		  },
		  "delivery": {
			"price": 10,
		  }
		},
		"meta": {
		  "mintCoinMultiplier": 5
		}
	  },
	],
	"currentUserState": {
	  "status": "PAYMENT_FAILED",
	  "statusData": {}
	}
}

const PAYMENT_SUCCESS =  {
	"brokerDetails": {
	  "name": "Swastika",
	  "logoUrl": "https://example.com/logo.png"
	},
	"brokingRegistrationPlans": [
	  {
		"id": "12345",
		"name": "Default",
		"registrationPlan": {
			price: 300,
			registrationRequired: true
		},
		"brokingPlan": {
		  "intraday": {
			"price": 10,
	
		  },
		  "fno": {
			"price": 10,

		  },
		  "delivery": {
			"price": 10,
		  }
		},
		"meta": {
		  "mintCoinMultiplier": 5
		}
	  },
	],
	"currentUserState": {
	  "status": "PAYMENT_SUCCESS",
	  "statusData": {}
	}
}

const stageValues = {
	1:NOT_ELIGIBLE_SAMPLE,
	2:JOINED_WAITLIST_SAMPLE,
	3:ELIGIBLE_SAMPLE,
	4:PAYMENT_INIT,
	5:PAYMENT_FAILED,
	6:PAYMENT_SUCCESS,
}
function handler(req, res) {
	const query = req.query;
	const {stage} = query
	res.status(200).json(stageValues[stage]);
}

export default handler;
