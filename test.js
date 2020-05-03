let letterA = new Image, letterB = new Image, letterV = new Image, letterG = new Image, letterGG = new Image, letterD = new Image, letterE = new Image, letterEE = new Image, letterZH = new Image, letterZ = new Image, letterU = new Image, letterI = new Image, letterII = new Image, letterYI = new Image, letterK = new Image, letterL = new Image, letterM = new Image, letterN = new Image, letterO = new Image, letterP = new Image, letterR = new Image, letterS = new Image, letterT = new Image, letterY = new Image, letterF = new Image, letterH = new Image, letterTS = new Image, letterCH = new Image, letterSH = new Image, letterSHCH = new Image, letterSoft = new Image, letterYU = new Image, letterYA = new Image;

letterA.src = 'src/letters/a_big.png';
letterB.src = 'src/letters/b_big.png';
letterV.src = 'src/letters/v_big.png';
letterG.src = 'src/letters/g_big.png';
letterGG.src = 'src/letters/gg_big.png';
letterD.src = 'src/letters/d_big.png';
letterE.src = 'src/letters/e_big.png';
letterEE.src = 'src/letters/ee_big.png';
letterZH.src = 'src/letters/j_big.png';
letterZ.src = 'src/letters/z_big.png';
letterU.src = 'src/letters/u_big.png';
letterI.src = 'src/letters/i_big.png';
letterII.src = 'src/letters/ii_big.png';
letterYI.src = 'src/letters/yi_big.png';
letterK.src = 'src/letters/k_big.png';
letterL.src = 'src/letters/l_big.png';
letterM.src = 'src/letters/m_big.png';
letterN.src = 'src/letters/n_big.png';
letterO.src = 'src/letters/o_big.png';
letterP.src = 'src/letters/p_big.png';
letterR.src = 'src/letters/r_big.png';
letterS.src = 'src/letters/s_big.png';
letterT.src = 'src/letters/t_big.png';
letterY.src = 'src/letters/y_big.png';
letterF.src = 'src/letters/f_big.png';
letterH.src = 'src/letters/h_big.png';
letterTS.src = 'src/letters/ts_big.png';
letterCH.src = 'src/letters/ch_big.png';
letterSH.src = 'src/letters/sh_big.png';
letterSHCH.src = 'src/letters/shch_big.png';
letterSoft.src = 'src/letters/soft_big.png';
letterYU.src = 'src/letters/yu_big.png';
letterYA.src = 'src/letters/ya_big.png';

let findA = new Audio('Sounds/find_letter/find_a.mp3');
let findB = new Audio('Sounds/find_letter/find_b.mp3');
let findV = new Audio('Sounds/find_letter/find_v.mp3');
let findG = new Audio('Sounds/find_letter/find_g.mp3');
let findGG = new Audio('Sounds/find_letter/find_gg.mp3');
let findD = new Audio('Sounds/find_letter/find_d.mp3');
let findE = new Audio('Sounds/find_letter/find_e.mp3');
let findEE = new Audio('Sounds/find_letter/find_ee.mp3');
let findZH = new Audio('Sounds/find_letter/find_zh.mp3');
let findZ = new Audio('Sounds/find_letter/find_z.mp3');
let findU = new Audio('Sounds/find_letter/find_u.mp3');
let findI = new Audio('Sounds/find_letter/find_i.mp3');
let findII = new Audio('Sounds/find_letter/find_ii.mp3');
let findYI = new Audio('Sounds/find_letter/find_yi.mp3');
let findK = new Audio('Sounds/find_letter/find_k.mp3');
let findL = new Audio('Sounds/find_letter/find_l.mp3');
let findM = new Audio('Sounds/find_letter/find_m.mp3');
let findN = new Audio('Sounds/find_letter/find_n.mp3');
let findO = new Audio('Sounds/find_letter/find_o.mp3');
let findP = new Audio('Sounds/find_letter/find_p.mp3');
let findR = new Audio('Sounds/find_letter/find_r.mp3');
let findS = new Audio('Sounds/find_letter/find_s.mp3');
let findT = new Audio('Sounds/find_letter/find_t.mp3');
let findY = new Audio('Sounds/find_letter/find_y.mp3');
let findF = new Audio('Sounds/find_letter/find_f.mp3');
let findH = new Audio('Sounds/find_letter/find_h.mp3');
let findTS = new Audio('Sounds/find_letter/find_ts.mp3');
let findCH = new Audio('Sounds/find_letter/find_ch.mp3');
let findSH = new Audio('Sounds/find_letter/find_sh.mp3');
let findSHCH = new Audio('Sounds/find_letter/find_shch.mp3');
let findSoft = new Audio('Sounds/find_letter/find_soft.mp3');
let findYU = new Audio('Sounds/find_letter/find_yu.mp3');
let findYA = new Audio('Sounds/find_letter/find_ya.mp3');

let good = new Audio('Sounds/voice/good.mp3');
let notGood = new Audio('Sounds/voice/not_good.mp3');
let magic = new Audio('Sounds/voice/magic.mp3')

let findArray = [findA, findB, findV, findG, findGG, findD, findE, findEE, findZH, findZ, findU, findI, findII, findYI, findK, findL, findM, findN, findO, findP, findR, findS, findT, findY, findF, findH, findTS, findCH, findSH, findSHCH, findSoft, findYU, findYA];

let letterArray = [letterA, letterB, letterV, letterG, letterGG, letterD, letterE, letterEE, letterZH, letterZ, letterU, letterI, letterII, letterYI, letterK, letterL, letterM, letterN, letterO, letterP, letterR, letterS, letterT, letterY, letterF, letterH, letterTS, letterCH, letterSH, letterSHCH, letterSoft, letterYU, letterYA];

const UA_ALPHABET = ['А', 'Б', 'В', 'Г', 'ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ю', 'Я']

////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let findRandomNumber = new Number;
let random = new Number;
let arrayRandom = new Number;

function randomLetter() {
	$('.random-img').remove();
	let letterRow = 7;
	let userLettter = $('.letter-input').val();
	let userLetterIndex = UA_ALPHABET.indexOf(userLettter.toUpperCase());
	console.log(userLetterIndex);
	if (userLetterIndex < 7) {
		letterRow = letterRow - (letterRow - userLetterIndex);
	}

	findRandomNumber = Math.floor(Math.random() * (userLetterIndex + 1));
	findArray[findRandomNumber].play();

	let testLetterArray = [letterArray[findRandomNumber].src];
	for (let i = 1; i <= letterRow; i++) {
		random = Math.floor(Math.random() * (userLetterIndex + 1));
		if (testLetterArray.includes(letterArray[random].src)) {
			i--
		} else {
			testLetterArray.push(letterArray[random].src);
		}
	}
	console.log(testLetterArray)

	let equalNumber = [];
	for (let i = 0; i < testLetterArray.length; i++) {
		arrayRandom = Math.floor(Math.random() * (testLetterArray.length));
		if (equalNumber.includes(arrayRandom)) {
			i--
		} else {
			$('.experiment').append(`<img src='${testLetterArray[arrayRandom]}' class='random-img'>`);
			equalNumber.push(arrayRandom);
		}
	}
	console.log(equalNumber)
	$('.get-letter').text('Продовжити')
}

$('.get-letter').click(randomLetter);

$('.experiment').click((event) => {
	let a = event.target;
	for (let i = 0; i < findArray.length; i++) {
		if (a.src === letterArray[i].src) {
			if (i === findRandomNumber) {
				magic.play();
				good.play();
			}
			else {
				notGood.play()
			}
		}
	}
});

$('.esc-game').click(() => {
	$('.random-img').remove();
	$('.letter-input').val('');
	$('.get-letter').text('Розпочати')
})


