$('.slider').slick({
	slidesToShow: 1,
	dots: true,
	arrows: true,
	infinite: true,
	initialSlide: 0,
	speed: 100,
	fade: true,
	cssEase: 'linear',
	responsive: [
		{
			breakpoint: 480,
			settings: {
				dots: false,
			}
		},
	]
});

let letA = {
	shark: 'src/img/a-img/shark_text.png',
	apricot: 'src/img/a-img/apricot_text.png',
	letterA: 'src/letters/big_small_letters/a_letters.png',
	pineapple: 'src/img/a-img/pineapple_text.png',
	bus: 'src/img/a-img/bus_text.png'
}

let letB = {
	squirrel: 'src/img/b-img/squirrel_text.png',
	bananas: 'src/img/b-img/bananas_text.png',
	letterB: 'src/letters/big_small_letters/b_letters.png',
	eggplant: 'src/img/b-img/eggplant_text.png',
	rum: 'src/img/b-img/rum_text.png'
}

let letV = {
	bear: 'src/img/v-img/bear_text.png',
	bicycle: 'src/img/v-img/bicycle_text.png',
	letterV: 'src/letters/big_small_letters/v_letters.png',
	camel: 'src/img/v-img/camel_text.png',
	grapes: 'src/img/v-img/grapes_text.png'
}

let letG = {
	goose: 'src/img/g-img/goose_text.png',
	pear: 'src/img/g-img/pear_text.png',
	letterG: 'src/letters/big_small_letters/g_letters.png',
	pumpkin: 'src/img/g-img/pumpkin_text.png',
	caterpillar: 'src/img/g-img/caterpillar_text.png'
}

let letGG = {
	crow: 'src/img/gg-img/crow_text.png',
	button: 'src/img/gg-img/button_text.png',
	letterGG: 'src/letters/big_small_letters/gg_letters.png',
	gadfly: 'src/img/gg-img/gadfly_text.png',
	screw: 'src/img/gg-img/screw_text.png'
}

let letD = {
	melon: 'src/img/d-img/melon_text.png',
	dolphin: 'src/img/d-img/dolphin_text.png',
	letterD: 'src/letters/big_small_letters/d_letters.png',
	sofa: 'src/img/d-img/sofa_text.png',
	dragon: 'src/img/d-img/dragon_text.png'
}

let letE = {
	eclair: 'src/img/e-img/eclair_text.png',
	eskimo: 'src/img/e-img/eskimo_text.png',
	letterE: 'src/letters/big_small_letters/e_letters.png',
	popsicle: 'src/img/e-img/popsicle_text.png',
	screen: 'src/img/e-img/screen_text.png'
}

let letEE = {
	echidna: 'src/img/ee-img/echidna_text.png',
	raccoon: 'src/img/ee-img/raccoon_text.png',
	letterEE: 'src/letters/big_small_letters/ee_letters.png',
	unicorn: 'src/img/ee-img/unicorn_text.png',
	egypt: 'src/img/ee-img/egypt_text.png'
}

let letJ = {
	acorn: 'src/img/j-img/acorn_text.png',
	frog: 'src/img/j-img/frog_text.png',
	letterJ: 'src/letters/big_small_letters/j_letters.png',
	giraffe: 'src/img/j-img/giraffe_text.png',
	jasmine: 'src/img/j-img/jasmine_text.png'
}

let letZ = {
	bunny: 'src/img/z-img/bunny_text.png',
	castle: 'src/img/z-img/castle_text.png',
	letterZ: 'src/letters/big_small_letters/z_letters.png',
	star: 'src/img/z-img/star_text.png',
	tooth: 'src/img/z-img/tooth_text.png'
}

let letU = {
	whale: 'src/img/u-img/whale_text.png',
	thread: 'src/img/u-img/thread_text.png',
	letterU: 'src/letters/big_small_letters/u_letters.png',
	cheese: 'src/img/u-img/cheese_text.png',
	soap: 'src/img/u-img/soap_text.png'
}

let letI = {
	caviar: 'src/img/i-img/caviar_text.png',
	toy: 'src/img/i-img/toy_text.png',
	letterI: 'src/letters/big_small_letters/i_letters.png',
	turkey: 'src/img/i-img/turkey_text.png',
	tools: 'src/img/i-img/tools_text.png'
}

let letII = {
	food: 'src/img/ii-img/food_text.png',
	train: 'src/img/ii-img/train_text.png',
	letterII: 'src/letters/big_small_letters/ii_letters.png',
	hedgehog: 'src/img/ii-img/hedgehog_text.png',
	ukraine: 'src/img/ii-img/ukraine_text.png'
}

let letYI = {
	iodine: 'src/img/yi-img/iodine_text.png',
	yogurt: 'src/img/yi-img/yogurt_text.png',
	letterYI: 'src/letters/big_small_letters/yi_letters.png',
	yoga: 'src/img/yi-img/yoga_text.png',
	watering: 'src/img/yi-img/watering_text.png'
}

let letK = {
	cat: 'src/img/k-img/cat_text.png',
	cabbage: 'src/img/k-img/cabbage_text.png',
	letterK: 'src/letters/big_small_letters/k_letters.png',
	chicken: 'src/img/k-img/chicken_text.png',
	cow: 'src/img/k-img/cow_text.png'
}

let letL = {
	lion: 'src/img/l-img/lion_text.png',
	fox: 'src/img/l-img/fox_text.png',
	letterL: 'src/letters/big_small_letters/l_letters.png',
	lemon: 'src/img/l-img/lemon_text.png',
	stork: 'src/img/l-img/stork_text.png'
}

let letM = {
	mouse: 'src/img/m-img/mouse_text.png',
	carrot: 'src/img/m-img/carrot_text.png',
	letterM: 'src/letters/big_small_letters/m_letters.png',
	raspberry: 'src/img/m-img/raspberry_text.png',
	iceCream: 'src/img/m-img/ice-cream_text.png'
}

let letN = {
	knife: 'src/img/n-img/knife_text.png',
	narcissus: 'src/img/n-img/narcissus_text.png',
	letterN: 'src/letters/big_small_letters/n_letters.png',
	rhinoceros: 'src/img/n-img/rhinoceros_text.png',
	scissors: 'src/img/n-img/scissors_text.png'
}

let letO = {
	donkey: 'src/img/o-img/donkey_text.png',
	cucumber: 'src/img/o-img/cucumber_text.png',
	letterO: 'src/letters/big_small_letters/o_letters.png',
	sheep: 'src/img/o-img/sheep_text.png',
	pencil: 'src/img/o-img/pencil_text.png'
}

let letP = {
	palm: 'src/img/p-img/palm_text.png',
	parrot: 'src/img/p-img/parrot_text.png',
	letterP: 'src/letters/big_small_letters/p_letters.png',
	panda: 'src/img/p-img/panda_text.png',
	tomato: 'src/img/p-img/tomato_text.png'
}

function slidesDownloader() {
	let activeSlide = $('.slick-active:first');
	let letterData = activeSlide.data('letter');
	let obj = eval(letterData);
	let letterKeys = Object.keys(obj);

	function appendWrapper() {
		activeSlide.append(`<div class="wrapper"></div`);
	};

	function appendImgGroup() {
		$('.slick-active:first>.wrapper').append(`<div class="img-group"></div>`);
	};

	function appendImgContainer(index, type) {
		let imgSrc = obj[letterKeys[index]]
		let dataName = letterKeys[index];
		$(`.slick-active:first>.wrapper>.img-group:nth-of-type(${type})`).append(`<div class="img-container" data-img=${dataName}><img src="${imgSrc}" alt=${dataName} class="alphabet-img" data-img=${dataName}></div>`)
	};

	function appendMainImg(index) {
		let imgSrc = obj[letterKeys[index]]
		let dataName = letterKeys[index];
		$('.slick-active:first>.wrapper').append(`<div class="main-img" data-img="${dataName}"><img src="${imgSrc}" alt=${dataName} class="letter-img" data-img="${dataName}"></div>`);
	};

	appendWrapper();
	appendImgGroup();
	appendImgContainer(0, 1);
	appendImgContainer(1, 1);
	appendMainImg(2);
	appendImgGroup();
	appendImgContainer(3, 3);
	appendImgContainer(4, 3);
};

function slidesDelete() {
	$('.slick-active:first').empty();
	$('.slider__item').empty();
};

$('.slider').ready(slidesDownloader);

$('.slider>.slick-dots>li').click(() => {
	slidesDelete();
	slidesDownloader();
});

$('.slider>.slick-arrow').click(() => {
	slidesDelete();
	slidesDownloader();
});

$('.slider').on('swipe', () => {
	slidesDelete();
	slidesDownloader();
})

let letterA = new Audio('Sounds/A.mp3')
let letterB = new Audio('Sounds/B.mp3')
let letterV = new Audio('Sounds/V.mp3')
let letterG = new Audio('Sounds/G.mp3')
let letterGG = new Audio('Sounds/GG.mp3')
let letterD = new Audio('Sounds/D.mp3')
let letterE = new Audio('Sounds/E.mp3')
let letterEE = new Audio('Sounds/EE.mp3')
let letterJ = new Audio('Sounds/J.mp3')
let letterZ = new Audio('Sounds/Z.mp3')
let letterU = new Audio('Sounds/U.mp3')
let letterI = new Audio('Sounds/I.mp3')
let letterII = new Audio('Sounds/II.mp3')
let letterYI = new Audio('Sounds/YI.mp3')
let letterK = new Audio('Sounds/K.mp3')
let letterL = new Audio('Sounds/L.mp3')
let letterM = new Audio('Sounds/M.mp3')
let letterN = new Audio('Sounds/N.mp3')
let letterO = new Audio('Sounds/O.mp3')
let letterP = new Audio('Sounds/P.mp3')
let letterR = new Audio('Sounds/R.mp3')
let letterS = new Audio('Sounds/S.mp3')
let letterT = new Audio('Sounds/T.mp3')
let letterY = new Audio('Sounds/Y.mp3')
let letterF = new Audio('Sounds/F.mp3')
let letterH = new Audio('Sounds/H.mp3')
let letterTS = new Audio('Sounds/TS.mp3')
let letterCH = new Audio('Sounds/CH.mp3')
let letterSH = new Audio('Sounds/SH.mp3')
let letterSHCH = new Audio('Sounds/SHCH.mp3')
let letterSoft = new Audio('Sounds/Soft.mp3')
let letterYU = new Audio('Sounds/YU.mp3')
let letterYA = new Audio('Sounds/YA.mp3')

let shark = new Audio('src/img/a-img/shark.mp3');
let bus = new Audio('src/img/a-img/bus.mp3');
let orange = new Audio('src/img/a-img/orange.mp3');
let pineapple = new Audio('src/img/a-img/pineapple.mp3');
let apricot = new Audio('src/img/a-img/apricot.mp3');
let car = new Audio('src/img/a-img/car.mp3');
let squirrel = new Audio('src/img/b-img/squirrel.mp3');
let bananas = new Audio('src/img/b-img/bananas.mp3');
let drum = new Audio('src/img/b-img/drum.mp3');
let sandwich = new Audio('src/img/b-img/sandwich.mp3');
let eggplant = new Audio('src/img/b-img/eggplant.mp3');
let rum = new Audio('src/img/b-img/rum.mp3');
let bear = new Audio('src/img/v-img/bear.mp3');
let bicycle = new Audio('src/img/v-img/bicycle.mp3');
let cherries = new Audio('src/img/v-img/cherries.mp3');
let camel = new Audio('src/img/v-img/camel.mp3');
let grapes = new Audio('src/img/v-img/grapes.mp3');
let broom = new Audio('src/img/v-img/broom.mp3');
let goose = new Audio('src/img/g-img/goose.mp3');
let jug = new Audio('src/img/g-img/jug.mp3');
let pear = new Audio('src/img/g-img/pear.mp3');
let mushroom = new Audio('src/img/g-img/mushroom.mp3');
let caterpillar = new Audio('src/img/g-img/caterpillar.mp3');
let pumpkin = new Audio('src/img/g-img/pumpkin.mp3');
let button = new Audio('src/img/gg-img/button.mp3');
let crow = new Audio('src/img/gg-img/crow.mp3');
let gooseberry = new Audio('src/img/gg-img/gooseberry.mp3');
let gadfly = new Audio('src/img/gg-img/gadfly.mp3');
let screw = new Audio('src/img/gg-img/screw.mp3');
let whirligig = new Audio('src/img/gg-img/whirligig.mp3');
let dolphin = new Audio('src/img/d-img/dolphin.mp3');
let melon = new Audio('src/img/d-img/melon.mp3');
let rain = new Audio('src/img/d-img/rain.mp3');
let sofa = new Audio('src/img/d-img/sofa.mp3');
let dragon = new Audio('src/img/d-img/dragon.mp3');
let tree = new Audio('src/img/d-img/tree.mp3');
let eclair = new Audio('src/img/e-img/eclair.mp3');
let energy = new Audio('src/img/e-img/energy.mp3');
let eskimo = new Audio('src/img/e-img/eskimo.mp3');
let excavator = new Audio('src/img/e-img/excavator.mp3');
let popsicle = new Audio('src/img/e-img/popsicle.mp3');
let screen = new Audio('src/img/e-img/screen.mp3');
let echidna = new Audio('src/img/ee-img/echidna.mp3');
let egypt = new Audio('src/img/ee-img/egypt.mp3');
let raccoon = new Audio('src/img/ee-img/raccoon.mp3');
let unicorn = new Audio('src/img/ee-img/unicorn.mp3');
let acorn = new Audio('src/img/j-img/acorn.mp3');
let beetle = new Audio('src/img/j-img/beetle.mp3');
let frog = new Audio('src/img/j-img/frog.mp3');
let magazine = new Audio('src/img/j-img/magazine.mp3');
let giraffe = new Audio('src/img/j-img/giraffe.mp3');
let jasmine = new Audio('src/img/j-img/jasmine.mp3');
let bunny = new Audio('src/img/z-img/bunny.mp3');
let castle = new Audio('src/img/z-img/castle.mp3');
let snake = new Audio('src/img/z-img/snake.mp3');
let star = new Audio('src/img/z-img/star.mp3');
let zebra = new Audio('src/img/z-img/zebra.mp3');
let tooth = new Audio('src/img/z-img/tooth.mp3');
let whale = new Audio('src/img/u-img/whale.mp3');
let thread = new Audio('src/img/u-img/thread.mp3');
let cheese = new Audio('src/img/u-img/cheese.mp3');
let soap = new Audio('src/img/u-img/soap.mp3');
let iguana = new Audio('src/img/i-img/iguana.mp3');
let caviar = new Audio('src/img/i-img/caviar.mp3');
let toy = new Audio('src/img/i-img/toy.mp3');
let indian = new Audio('src/img/i-img/indian.mp3');
let tools = new Audio('src/img/i-img/tools.mp3');
let turkey = new Audio('src/img/i-img/turkey.mp3');
let feathers = new Audio('src/img/ii-img/feathers.mp3');
let food = new Audio('src/img/ii-img/food.mp3');
let go = new Audio('src/img/ii-img/go.mp3');
let hedgehog = new Audio('src/img/ii-img/hedgehog.mp3');
let train = new Audio('src/img/ii-img/train.mp3');
let ukraine = new Audio('src/img/ii-img/ukraine.mp3');
let yogurt = new Audio('src/img/yi-img/yogurt.mp3');
let iodine = new Audio('src/img/yi-img/iodine.mp3');
let watering = new Audio('src/img/yi-img/watering.mp3');
let yoga = new Audio('src/img/yi-img/yoga.mp3');
let cow = new Audio('src/img/k-img/cow.mp3');
let crown = new Audio('src/img/k-img/crown.mp3');
let cat = new Audio('src/img/k-img/cat.mp3');
let cabbage = new Audio('src/img/k-img/cabbage.mp3');
let chicken = new Audio('src/img/k-img/chicken.mp3');
let kiwi = new Audio('src/img/k-img/kiwi.mp3');
let fox = new Audio('src/img/l-img/fox.mp3');
let leaf = new Audio('src/img/l-img/leaf.mp3');
let lion = new Audio('src/img/l-img/lion.mp3');
let lamp = new Audio('src/img/l-img/lamp.mp3');
let stork = new Audio('src/img/l-img/stork.mp3');
let lemon = new Audio('src/img/l-img/lemon.mp3');
let monkey = new Audio('src/img/m-img/monkey.mp3');
let raspberry = new Audio('src/img/m-img/raspberry.mp3');
let iceCream = new Audio('src/img/m-img/ice-cream.mp3');
let motorcycle = new Audio('src/img/m-img/motorcycle.mp3');
let mouse = new Audio('src/img/m-img/mouse.mp3');
let carrot = new Audio('src/img/m-img/carrot.mp3');
let knife = new Audio('src/img/n-img/knife.mp3');
let narcissus = new Audio('src/img/n-img/narcissus.mp3');
let pump = new Audio('src/img/n-img/pump.mp3');
let rhinoceros = new Audio('src/img/n-img/rhinoceros.mp3');
let scissors = new Audio('src/img/n-img/scissors.mp3');
let cucumber = new Audio('src/img/o-img/cucumber.mp3');
let donkey = new Audio('src/img/o-img/donkey.mp3');
let sheep = new Audio('src/img/o-img/sheep.mp3');
let pencil = new Audio('src/img/o-img/pencil.mp3');
let parrot = new Audio('src/img/p-img/parrot.mp3');
let palm = new Audio('src/img/p-img/palm.mp3');
let tomato = new Audio('src/img/p-img/tomato.mp3');
let panda = new Audio('src/img/p-img/panda.mp3');

// $('.alphabet-img').click(() => {
// 	let sectionClick = document.querySelector('.img-container');
// 	let letterClick;
// 	sectionClick.onclick = function (e) {
// 		letterClick = e.target.dataset.img;
// 		console.log(letterClick)
// 		eval(letterClick).play();
// 	}
// })

// $('.slick-active').click(() => {
let sliderClick = document.querySelector('.slider');
let bigLetterClick;
sliderClick.onclick = function (e) {
	bigLetterClick = e.target.dataset.img;
	if (bigLetterClick) {
		eval(bigLetterClick).play();
	}
}
// })