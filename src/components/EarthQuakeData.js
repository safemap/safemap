const EarthQuakeData = () => ({
	url: null,
	method: ['get'],
	dummy: {
		header : [
				{name:'Ranking', key:'ranking'},
				{name:'Country', key:'country'},
				{name:'Counter', key:'counter'},
			],
		list : [
			{ranking:1, country:'Korea', counter: 1},
			{ranking:2, country:'Japan', counter: 2},
			{ranking:3, country:'Korea', counter: 3},
			{ranking:4, country:'Korea', counter: 4},
			{ranking:5, country:'Korea', counter: 5},
		],
	}
});

export default EarthQuakeData;
