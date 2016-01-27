 var getStof = [{
		id: 0,
		name: "Amsterdam-A10-West",
		coordinates: {
			lon: "4.84072",
			lat: "52.33898"
		},
		fijnstof: [20.9,24.2,30.7,32.5,22.8,18.8,14.8,20.5,22.1,24.6,23.5,27,28.1,19.5,24.8,28.6,19.9,23.7,31.9,16.9,17.4,16.8,27.6,18,20,27.8,31,35.6,25.3,27.8,37],
		ultrafijnstof: []
	}, 
	{
		id: 1,
		name: "Amsterdam-Einsteinweg",
		coordinates: {
			lon: "4.84501",
			lat: "52.38249"
		},
		fijnstof: [30.4,37.8,52.6,64.7,44.6,26.9,20,24.9,30.6,34.2,31.3,34.8,40.2,24.2,37.8,40.7,27.3,31.3,39.9,25.1,23.8,20.9,38.1,30.5,25.8,33.6,42.9,46.7,38.5,36.5,47.4],
		ultrafijnstof: [19.8,27.1,38.4,51.8,32,17.6,10.6,9.6,18.8,23.8,19.8,31.8,35.7,19.8,30.8,34.4,21.4,28,34,21.5,21.9,15.6,35.4,26.2,17.9,27.7,34.5,38.8,34.6,30.7,41.1]
	}, 
	{
		id: 2,
		name: "Amsterdam-Jan van Galenstraat",
		coordinates: {
			lon: "4.86041",
			lat: "52.37494"
		},
		fijnstof: [22.9,25,49.2,63.2,43.4,20.2,16.6,22.1,23.4,29.7,25.4,27.6,29.7,17.6,27.6,32.4,21.4,30.5,33.7,21.6,21.6,19.8,35.3,24.7,19.6,30.3,41,41.2,34.5,30.8,44.4],
		ultrafijnstof: []
	},
	{
		id: 3,
		name: "Amsterdam-Stadhouderskade",
		coordinates: {
			lon: "4.90011",
			lat: "52.35809"
		},
		fijnstof: [27.7,37.4,53,67.2,37.3,22.5,12.7,20.9,23.4,30.4,27.8,28.2,32.2,20.6,29.7,32.9,21.3,26.9,34.9,19.2,22.5,18.6,32.8,26.4,18.7,27.7,35.3,36.4,30.8,27.1,39.6],
		ultrafijnstof: [15,24.1,38.3,53.1,28,15,6,9.2,13.9,18.9,16.4,16,21.5,8.9,21.1,25.8,14.7,19.4,22.8,9.2,14.3,9.2,13.9,14.3,7.5,16.1,24.5,24.5,18.9,16.9,29.4]
	}, 
	{
		id: 4,
		name: "Amsterdam-Van Diemenstraat",
		coordinates: {
			lon: "4.88742",
			lat: "52.39013"
		},
		fijnstof: [23.8,31.3,48.4,62.3,38.5,21.7,15.6,23,23.6,30,27.1,29.4,31.3,16,31.2,34.8,21.6,29.6,32.4,20.4,24,18.8,35.8,26.7,20.2,31.5,41.7,44.9,38.7,39.3,45.4],
		ultrafijnstof: [15.5,25.6,40.7,54.9,31.3,18,12.7,11.9,17,22.5,18.1,19.6,23.3,13.6,25.5,32.3,20.3,24.6,28.1,11.9,17.1,13,17.3,17.7,10.3,20.6,32.4,34.3,27.3,25.5,36.3]
	}, 
	{
		id: 5,
		name: "Amsterdam-Vondelpark",
		coordinates: {
			lon: "4.86646",
			lat: "52.3596"
		},
		fijnstof: [19.7,29.8,42.6,50.7,29.9,16.1,11.3,14.7,19,28.6,24.9,24.9,28.3,15.1,26,29.1,14.9,21.5,28,14.9,15.7,11.6,20.6,21,15.4,22.9,31.3,32.8,25,25,38.4],
		ultrafijnstof: [13.4,21.4,35.3,46.3,25.2,13.3,7.8,6,11.1,20.9,16,15.2,20.9,10.3,20.9,25.1,13.3,16.9,21.5,7.4,10.3,9.4,9.1,13.8,6.5,14.8,22.9,26.4,18.9,16.8,29.9]
	},
	{
		id: 6,
		name: "Amsterdam-Westerpark",
		coordinates: {
			lon: "4.86993",
			lat: "52.39394"
		},
		fijnstof: [19.3,26.1,41.9,50.7,32.9,13.7,9,13.9,16,23.7,23.5,25.3,27.7,20.6,27,27.9,15.4,20.9,28.8,17.2,17.4,13.1,23.8,20.9,13.9,24.5,35.1,34.3,23.2,23.2,34],
		ultrafijnstof: [12,18.7,34.2,44.3,26,11.8,7.9,6.9,13.1,20.6,18.9,20.2,25.5,19.1,23.8,27.5,13.6,20,23.9,7.1,13,7.8,11.8,14.7,7.5,18,26.2,27.3,17,19.8,31.9]
	}, 
	{
		id: 7,
		name: "Badhoevedorp",
		coordinates: {
			lon: "4.77644",
			lat: "52.333952"
		},
		fijnstof: [22.9,33.7,48.9,67.5,34.8,21.4,15.6,22,25.5,30.4,25.8,28.1,30,17.5,27.4,31.5,19.9,24,32.7,21.2,19.4,17.5,35.9,23.4,17.5,25.5,34,35.7,27,26.1,40.2],
		ultrafijnstof: [12.5,20.7,36.6,51,23.3,13.8,6.7,7.5,12.8,20.1,17.2,17.9,22.3,12.1,22.3,26.5,15.3,17.9,23.3,8.8,12.8,9.7,12.3,15.2,8.6,16.2,25.5,26.9,19.4,18.6,33.1]
	}, 
	{
		id: 8,
		name: "Hemkade",
		coordinates: {
			lon: "4.832057",
			lat: "52.421478"
		},
		fijnstof: [20.4,26.1,46,55.5,33.4,20,13.9,13.9,18.4,25.5,23.7,24.5,28.6,12.4,20.2,23.3,10.9,16.8,21.9,9.1,18.2,10.8,34.1,22.7,10.6,20.6,29.6,33.1,34.8,22.8,34.5],
		ultrafijnstof: []
	}]

function getZoom() {
	return [{
		1: {
			r: 0,
			d: 0
		},
		2: {
			r: 0,
			d: 0
		},
		3: {
			r: 0,
			d: 0
		},
		4: {
			r: 0,
			d: 0
		},
		5: {
			r: 0,
			d: 0
		},
		6: {
			r: 0,
			d: 0
		},
		7: {
			r: 0,
			d: 0
		},
		8: {
			r: 0,
			d: 0
		},
		9: {
			r: 0,
			d: 0
		},
		10: {
			r: 0,
			d: 0
		},
		11: {
			r: 2,
			d: 100
		},
		12: {
			r: 4,
			d: 100
		},
		13: {
			r: 6,
			d: 150
		},
		14: {
			r: 8,
			d: 200
		},
		15: {
			r: 10,
			d: 250
		},
		16: {
			r: 12,
			d: 300
		},
		17: {
			r: 14,
			d: 350
		}
	}]
}

function getDates() {
	return {
		datum: ["01/10/2015","02/10/2015","03/10/2015","04/10/2015","05/10/2015","06/10/2015","07/10/2015","08/10/2015","09/10/2015","10/10/2015","11/10/2015","12/10/2015","13/10/2015","14/10/2015","15/10/2015","16/10/2015","17/10/2015","18/10/2015","19/10/2015","20/10/2015","21/10/2015","22/10/2015","23/10/2015","24/10/2015","25/10/2015","26/10/2015","27/10/2015","28/10/2015","29/10/2015","30/10/2015","31/10/2015"]
	}
}

function getWeather() {
	return [{
		wind: 5.5, 
		richting: "NO"
	},
	{
		wind: 2.1, 
		richting: "NO"
	},
	{
		wind: 0.7, 
		richting: "O"
	},
	{
		wind: 1.5, 
		richting: "O"
	},
	{
		wind: 1.6, 
		richting: "O"
	},
	{
		wind: 1.7, 
		richting: "Z"
	},
	{
		wind: 6.4, 
		richting: "ZW"
	},
	{
		wind: 2.3, 
		richting: "ZW"
	},
	{
		wind: 0.4, 
		richting: "O"
	},
	{
		wind: 3.8, 
		richting: "NO"
	},
	{
		wind: 6.6, 
		richting: "NO"
	},
	{
		wind: 3.4, 
		richting: "NO"
	},
	{
		wind: 7.7, 
		richting: "NO"
	},
	{
		wind: 4.9, 
		richting: "NO"
	},
	{
		wind: 2.1, 
		richting: "O"
	},
	{
		wind: 1.1, 
		richting: "NO"
	},
	{
		wind: 0.1, 
		richting: "O"
	},
	{
		wind: 0.4, 
		richting: "NW"
	},
	{
		wind: 0.6, 
		richting: "NO"
	},
	{
		wind: 2.4, 
		richting: "NW"
	},
	{
		wind: 6, 
		richting: "ZW"
	},
	{
		wind: 5.4, 
		richting: "W"
	},
	{
		wind: 1.4, 
		richting: "Z"
	},
	{
		wind: 2.5, 
		richting: "Z"
	},
	{
		wind: 1.5, 
		richting: "NW"
	},
	{
		wind: 1, 
		richting: "ZO"
	},
	{
		wind: 0.8, 
		richting: "ZO"
	},
	{
		wind: 1.2, 
		richting: "ZO"
	},
	{
		wind: 3.2, 
		richting: "Z"
	},
	{
		wind: 1.8, 
		richting: "ZO"
	},
	{
		wind: 1, 
		richting: "NO"
	}]
}
