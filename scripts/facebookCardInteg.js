let user = {
	[
    first: 'Patricia',
    last: 'Oviedo',
    image: ''
    ], 

	[
	first: 'Lindsay',
	last: 'Aiello',
	image: ''
	],

	[
    first: 'Thea',
    last: 'Enos',
    image: ''
    ], 

    [
	first: 'Pete', 
	last: 'Avila',
	image: 
	],

    [
    first: 'Maya',
    last: 'Brooks',
    image: ''
    ], 

	[
    first: 'Taq',
    last: 'Karim',
    image: ''
    ], 


	[
    first: 'Yasmina',
    last: 'Shaush',
    image: ''
    ], 


    };


    let cardTemplate = `
    <div class="Card">
        <div class="Card__pic">
            <img src="${user.image}">
        </div>
        <div class="Card__name">
            <div class="Card__name__first">
                ${user.first}
            </div>
            <div class="Card__name__last">
                ${user.last}
            </div>
        </div>
    </div>
`




$('.Cards').append(cardTemplate);
