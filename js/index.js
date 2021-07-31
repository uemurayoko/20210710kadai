// スリックのスライダー
$('.slider').slick({
    autoplay:true,
    autoplaySpeed:4000,
    dots:true,
});

// HTMLへ表示させる中身---------------------------------------------------
let quiz = [
    {  
     question: "問１.「ふるえるぞハート！燃えつきるほど●●●！！」<p>●●●の部分を答えてください。※全角カタカナ３文字</p>",
     answers: "ヒート"
    },
    {
      question: "問２.シーザーとジョセフが命がけで登った柱の名称は？",
      answers: {
        a: "ヘルクライム・ピラー",
        b: "デスクライム・ピラー",
        c: "バドクライム・ピラー",
      },
      correctAnswer: "a"
    },
    {
      question: "問３.「花京院典明」の好物は？",
      answers: {
        a: "チェリー",
        b: "コーラ",
        c: "コーヒーガム",
      },
      correctAnswer: "a"
    },
    {
        question: "問４.「岸部露伴」の職業は？",
        answers: {
          a: "漫画家",
          b: "不動産屋",
          c: "考古学者",
        },
        correctAnswer: "a"
      },
      {
        question: "問５.「護衛チーム」をすべて選んでください。",
        answers: {
          a: "リゾット",
          b: "ジョルノ",
          c: "アバッキオ",
        },
        correctAnswer: "bc"
      }
  ];

// HTMLへ表示させる中身--------------------------------------ここまで


// HTMLへ表示させる方法--------------------------------------
  
// クイズ１
  let q1 = document.getElementById("q1-title");
  q1.innerHTML = quiz[0]["question"];

// クイズ２
  let q2 = document.getElementById("q2-title");
  q2.innerHTML = quiz[1]["question"];

  let q2_cont1 = document.getElementById("q2-a");
  q2_cont1.innerHTML = quiz[1].answers["a"];
  let q2_cont2 = document.getElementById("q2-b");
  q2_cont2.innerHTML = quiz[1].answers["b"];
  let q2_cont3 = document.getElementById("q2-c");
  q2_cont3.innerHTML = quiz[1].answers["c"];

// クイズ３
  let q3 = document.getElementById("q3-title");
  q3.innerHTML = quiz[2]["question"];

  let q3_cont1 = document.getElementById("q3-a");
  q3_cont1.innerHTML = quiz[2].answers["a"];
  let q3_cont2 = document.getElementById("q3-b");
  q3_cont2.innerHTML = quiz[2].answers["b"];
  let q3_cont3 = document.getElementById("q3-c");
  q3_cont3.innerHTML = quiz[2].answers["c"];

// クイズ４
  let q4 = document.getElementById("q4-title");
  q4.innerHTML = quiz[3]["question"];

  let q4_cont1 = document.getElementById("q4-a");
  q4_cont1.innerHTML = quiz[3].answers["a"];
  let q4_cont2 = document.getElementById("q4-b");
  q4_cont2.innerHTML = quiz[3].answers["b"];
  let q4_cont3 = document.getElementById("q4-c");
  q4_cont3.innerHTML = quiz[3].answers["c"];

// クイズ５
  let q5 = document.getElementById("q5-title");
  q5.innerHTML = quiz[4]["question"];

  let q5_cont1 = document.getElementById("q5-a");
  q5_cont1.innerHTML = quiz[4].answers["a"];
  let q5_cont2 = document.getElementById("q5-b");
  q5_cont2.innerHTML = quiz[4].answers["b"];
  let q5_cont3 = document.getElementById("q5-c");
  q5_cont3.innerHTML = quiz[4].answers["c"];

// HTMLへ表示させる------------------------------------ここまで


function btnclick() {

// 回答を集める--------------------------------------
let q_ans = document.getElementById("main");
let anser = [
  q_ans.elements["q1-q"],
  q_ans.elements["q2-q"],
  q_ans.elements["q3-q"],
  q_ans.elements["q4-q"],
  q_ans.elements["q5-q"]
];

// 正誤------------------------------------------

// 1問目
let correct = [];
if(anser[0] === "ヒート"){
    correct = 1;
  }
  else correct = 0;

// ２問目
let q2_c1 = document.getElementById("q2-a");
let q2_c2 = document.getElementById("q2-b");
let q2_c3 = document.getElementById("q2-c");
  if(q2_c1.checked){
    correct = 1;
  }
  else if(q2_c2.checked){ 
    correct = 0;
  }
  else if(q2_c3.checked){ 
    correct = 0;
  }


// ３問目
let q3_c1 = document.getElementById("q3-a");
let q3_c2 = document.getElementById("q3-b");
let q3_c3 = document.getElementById("q3-c");
if(q3_c1.checked){
    correct = 1;
  }
  else if(q3_c2.checked){ 
    correct = 0;
  }
  else if(q3_c3.checked){ 
    correct = 0;
  }


// ４問目
let q4_c1 = document.getElementById("q4-a");
let q4_c2 = document.getElementById("q4-b");
let q4_c3 = document.getElementById("q4-c");
if(q4_c1.checked){
  correct = 1;
  }
  else if(q4_c2.checked){ 
    correct = 0;
  }
  else if(q4_c3.checked){ 
    correct = 0;
  }

// ５問目
let q5_c1 = document.getElementById("q5-a");
let q5_c2 = document.getElementById("q5-b");
let q5_c3 = document.getElementById("q5-c");
if(q5_c2.checked && q5_c3.checked){
    correct = 1;
  }
  else if(q5_c2.checked){
    correct = 0;
  }
  else if(q5_c3.checked) {
    correct = 0;
  }
  else if(q5_c1.checked) {
    correct = 0;
}


//  結果表示--------------------------------------------------------
let a = function(correct) {
  let total = 0;
  for (var i = 0, len = correct.length; i < len; i++) total += correct;
  return total;
};

var total =  a(correct);
let resultvol = document.getElementById("result");
resultvol.innerHTML = "5問中" + total + "正解です";
}


