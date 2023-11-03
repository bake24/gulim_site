//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues=0;
var lang;
var score=0;

var HTMLquestions=[

    {
        question: "Мәскеу түбінде генерал-майор И.В Панфилов қолбасшылық еткен даңқты дивизия:",
        choices: ["316-атқыштар дивизиясы.", "314-атқыштар дивизиясы.", "318-атқыштар дивизиясы.", "317-атқыштар дивизиясы.", "312-атқыштар дивизиясы."],
        answer: 0
    },
    {
        question: "Берлин операциясының басталған уақыты:",
        choices: ["1941 жыл 16 сәуір.", "1942 жыл 16 сәуір.", "1939 жыл 16 сәуір.", "1944 жыл 16 сәуір.", "1945 жыл 16 сәуір."],
        answer: 4
    },
    {
        question: "Ұлы Отан соғысы жылдарында Кеңес Одағының батыры атағын алған қазақстандықтар саны:",
        choices: ["800-ге жуық.", "900-ға жуық.", "700-ге жуық.", "600-ге жуық.", "500-ге жуық."],
        answer: 4
    },
    {
        question: "Жеке өзі жаудың 37 ұшағын атып түсірген,екі мәрте Кеңес Одағының батыры:",
        choices: ["Т.Бигелдинов", "С.Луганский", "И.Кожедуб", "Л.Беда", "И.Павлов"],
        answer: 1
    },
    {
        question: "Рейхстагка жеңіс туын тіккен қазақстандық халық Қаћарманы:",
        choices: ["Т.Бигелдинов", "С.Луганский", "И.Кожедуб", "Р.Қошқарбаев", "Г.Булатов"],
        answer: 0
    },
    {
        question: "Ұлы Отан соғысы жылдарында Қазақстандық партизандардың жалпы саны:",
        choices: ["3,5 мың адам.", "4,5 мың адам.", "5 мың адам.", "3 мың адам", "7 мың адам"],
        answer: 4
    },
    {
        question: "Днепр үшін ұрыстарда 18 жасар ең жас қазақстандық Кеңес Одағының Батыры атанды:",
        choices: ["Т.Бигелдинов", "Қ.Аухадиев", "Қ.Қайсенов", "Р.Қошқарбаев", "Ж.Елеусізов"],
        answer: 2
    },
    {
        question: "1945 ж КСРО әскерлері Берлинді қоршады.",
        choices: ["30 сәуір", "9 мамыр", "24 сәуір", "16 сәуір", "8 мамыр"],
        answer: 4
    },
    {
        question: "Мәскеуді қорғауға барған Қазақстандық дивизия.",
        choices: ["306 атқыштар д-сы", "366 атқыштар д-сы", "516 атқыштар д-сы", "235 а.д.", "316 атқ. див."],
        answer: 2
    },
    {
        question: "ҰОС – да түбегейлі бетбұрыс қай шайқастан басталды?",
        choices: ["Мәскеу", "Брест", "Сталинград", "Ленинград", "Курск"],
        answer: 1
    },
    {
        question: "1945 ж Гитлер өзін — өзі өлтірді?",
        choices: ["9 мамыр", "30 сәуір", "2 қыркүйек", "16 сәуір", "24 сәуір"],
        answer: 4
    },
    {
        question: "1945 ж. Екінші д.ж.с. кейін «үлкен үштіктің» кездескен жері.",
        choices: ["Париж", "Қырым", "Тегеран", "Женева", "Подстам"],
        answer: 3
    },
    {
        question: "КСРО –да 30 жылдары орнаған саяси басқару жүйесі",
        choices: ["фашистік", "монархиялық", "демократиялық", "тоталитарлық", "коммунистік"],
        answer: 3
    },
    {
        question: "ГДР – дің құрылуы.",
        choices: ["1945ж 7қыркүйек", "1946 ж 7қараша", "1947 ж 7мамыр", "1949 ж 7қыркүйек",
    
     "1949 ж 7қараша"],
        answer: 3
    },
    {
        question: "Берлин қабырғасы тұрғызылған жыл.",
        choices: ["1960ж", "1956ж", "1945ж", "1961 ж", "1962ж"],
        answer: 3
    },
    {
        question: "ГФР-дің бірінші канцлері.",
        choices: ["Эрхард", "Бранд", "Шмид", "Коль", "Аденауэр"],
        answer: 4
    },
    {
        question: "ТМД құрылған жыл.",
        choices: ["1990ж", "1991 ж", "1992 ж", "1993ж", "1994ж"],
        answer: 1
    },
    {
        question: "БҰҰ – ның штаб-пәтері.",
        choices: ["Женева", "Париж", "Нью- Йорк", "Вашингтон", "Рим"],
        answer: 2
    },
    {
        question: "Қырық жылдан астам Қазақстан өкіметінің, республика партия ұйымының басшылығында болған",
        choices: ["Д.Қонаев", "Л.Брежнев", "Ж.Шаяхметов", "Н.Оңдасынов", "Н.Назарбаев"],
        answer: 0
    },
    {
        question: "КСРО-ның әлеуметтік-экономикалық дамуын жеделдету бағыты қабылданды",
        choices: ["1981 жылдың ақпанында", "1985 жылдың сәуірінде", "1986 жылдың ақпанында", "1988 жылдың мамырында", "1991 жылдың желтоқсанында"],
        answer: 1
    },
    {
        question: "1986 жылы желтоқсанның 16 күні Қазақстан КП Орталық Комитетінің пленумы Республика партия ұйымының басшысы етіп сайлады",
        choices: ["Д.Қонаевты", "Г.Колбинді", "Ж.Шаяхметовты", "Н.Оңдасыновты", "Н.Назарбаевты"],
        answer: 1
    },
    {
        question: "Қазақ КСР Жоғары Кеңесі Төралқасының Алматыдағы 1986 жылғы желтоқсанда болған оқиғаларды тексеру комиссиясының төрағасы",
        choices: ["М.Шаханов", "Ж.Молдағалиев", "Е.Асанбаев", "Қ.Рысқұлбеков", "Н.Назарбаев"],
        answer: 0
    }
                
];
var JSquestions=[

    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        choices: ["JavaScript variable names must begin with a letter or the underscore character.","JavaScript variable names are case sensitive.","Both of the above."," None of the above."],
        answer: 3
    
    }, 
    {/*wscubetech*/
        question: " Which of the following is a server-side Java Script object?",
        choices: ["Function","File","FilleUpload","Data"],
        answer: 2
    
    },
    {
        question: "Java script can be used for Storing the form's contents to a database file on the server",
        choices: ["False","True"],
        answer: 1
    
    }, 
    {
        question: "How does Java Script store dates in objects of Date type?",
        choices: ["The number of days since January 1st, 1900","The number of seconds since January 1st, 1970","The number of milliseconds since January 1st, 1970","The number of picoseconds since January 1st, 1970"],
        answer: 3
    
    },
    {
        question: "C-style block-level scoping is not supported in Java script",
        choices: ["False","True"],
        answer: 2
    
    },
    {
        question: "JavaScript ignores extra spaces in Syntax",
        choices: ["True","False"],
        answer: 2
    
    }, 
    {
        question: "Which of the following is the tainted property of a window object in Java Script?",
        choices: ["Pathname","Protocol","Defaultststus","Host"],
        answer: 3
    
    },
    {
        question: "Which attribute needs to be changed to make elements invisible?",
        choices: ["visibilty","visible","invisible","None of the above"],
        answer: 1
    
    }, 
    {
        question: " Javascript is an object oriented language?",
        choices: ["False","True"],
        answer: 2
    
    },
    {
        question: "What is the alternate name for Java script?",
        choices: ["LimeScript","ECMScript","Both of the above","ECMAScript"],
        answer: 4
    
    }
                
];
var PYquestions=[

    {
        question: "What is the output of the following program : print(Hello World'[::-1])",
        choices: ["dlroW olleH","Hello Worl","d","Error"],
        answer: 1
    
    }, 
    {
        question: "Given a function that does not return any value, what value is shown when executed at the shell?",
        choices: ["int","bool","void","None"],
        answer: 4
    
    },
    {
        question: "Which module in Python supports regular expressions?",
        choices: ["re","regex","pyregex","None of the above"],
        answer: 1
    
    }, 
    {
        question: "What is the output of the following program : (tricky ques.)  print (0.1 + 0.2 == 0.3) ",
        choices: ["True","False","Machine Dependent","Error"],
        answer: 2
    
    },
    {
        question: "Which of the following is not a complex number?",
        choices: ["k = 2 + 3j","k = complex(2, 3)","k = 2 + 3l","k = 2 + 3J"],
        answer: 3
    
    },
    {
        question: "What does ~~~~~~5 evaluate to?",
        choices: ["+5","-11","+11","-5"],
        answer: 1
    
    }, 
    {
        question: "Given a string s = “Welcome”, which of the following code is incorrect?",
        choices: ["print s[0]","print s.lower()","s[1] = ‘r’","print s.strip()"],
        answer: 3
    
    },
    {
        question: "________ is a simple but incomplete version of a function.",
        choices: ["Stub","Function","A function developed using bottom-up approach","A function developed using top-down approach"],
        answer: 1
    
    }, 
    {
        question: "To start Python from the command prompt, use the command ______",
        choices: ["execute python","go python","python","run python"],
        answer: 3
    
    },
    {
        question: "Which of the following is correct about Python?",
        choices: ["It supports automatic garbage collection.","It can be easily integrated with C, C++, COM, ActiveX, CORBA, and Java","Both of the above","None of the above"],
        answer: 3
    
    }
                
];
var Cquestions=[

    {
        question: "C Language was developed in the year ____",
        choices: ["1970","1975","1980","1985"],
        answer: 1
    
    }, 
    {
        question: "Which one is not a reserve keyword in C Language?",
        choices: ["auto","main","case","register"],
        answer: 2
    
    },
    {
        question: "A C variable name can start with a ____",
        choices: ["Number","Plus Sign","Underscore","Asterisk"],
        answer: 3
    
    }, 
    {
        question: "Prototype of a function means _____",
        choices: ["Name of Function","Output of Function","Declaration of Function","Input of a Function"],
        answer: 3
    
    },
    {
        question: "Name the loop that executes at least once.",
        choices: ["for","If","do-while","while"],
        answer: 3
    
    },
    {
        question: "Far pointer can access _____",
        choices: ["Single memory location","No memory location","All memory location","First and Last Memory Address"],
        answer: 3
    
    }, 
    {
        question: "A pointer pointing to a memory location of the variable even after deletion of the variavle is known as _____",
        choices: ["far pointer","dangling pointer","null pointer","void pointer"],
        answer: 2
    
    },
    {
        question: "An uninitialized pointer in C is called ___",
        choices: ["Constructor","dangling pointer","Wild Pointer","Destructor"],
        answer: 3
    
    }, 
    {
        question: "A pointer that is pointing to NOTHING is called ____",
        choices: ["VOID Pointer","DANGLING Pointer","NULL Pointer","WILD Pointer"],
        answer: 3
    
    },
    {
        question: "Who is known as the father of C Language ?",
        choices: ["Digvijay","James A. Sosling","Dr. E. F. Codd","Dennis Ritchie"],
        answer: 4
    
    }
                
];





//alert(questions.length);
document.getElementById("score").textContent="Ұпай саны : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";








document.querySelector(".choose-lang").addEventListener("click",function(){

    lang=document.getElementById("language").value+"questions";
    document.getElementById("ques-left").textContent="Сұрақ : "+(countQues+1)+"/"+window[lang].length;

//    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display="block";
    
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
     for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/
    
//    window.location.href="#score";

});





document.querySelector(".submit-answer").addEventListener("click",function(){
//     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
//     alert(document.querySelector('input[name="options"]:checked').value);

    if(document.querySelector('input[name="options"]:checked').value===window[lang][countQues].choices[window[lang][countQues].answer-1]){
           
        score+=10;
        document.getElementById("score").textContent="Ұпай саны : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle correct'>"+(countQues+1)+"</div>";
           
    }else{
    
        score-=5;
        document.getElementById("score").textContent="Ұпай саны : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle incorrect'>"+(countQues+1)+"</div>";
    };
    
    if (countQues<window[lang].length-1){
        countQues++;
    }else{
        document.querySelector(".submit-answer").style.display="none";
        document.querySelector(".view-results").style.display="unset";

    }
    
    document.getElementById("ques-left").textContent="Сұрақ : "+(countQues+1)+"/"+window[lang].length;
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
    for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/

});

document.querySelector(".view-results").addEventListener("click",function(){
    
    document.querySelector(".final-result").style.display="block";
    
    document.querySelector(".solved-ques-no").innerHTML="Сіз "+(countQues+1)+" сұраққа "+" жауап бердіңіз";
    
    var correct= document.getElementById("ques-view").getElementsByClassName("correct").length;
    
    document.querySelector(".right-wrong").innerHTML=correct+" дұрыс және "+((countQues+1)-correct)+" бұрыс";
    
    document.getElementById("display-final-score").innerHTML="Жалпы ұпай саны: "+score;
    
    if (correct/(countQues+1)>0.8){
        document.querySelector(".remark").innerHTML="Ескертпе: Керемет! :)";
    }else if(correct/(countQues+1)>0.6){
        document.querySelector(".remark").innerHTML="Ескертпе: Жарайды, жақсартуды жалғастырыңыз.";
    
    }else if(correct/(countQues+1)){
        document.querySelector(".remark").innerHTML="Ескертпе: Қанағаттанарлық, көбірек ізденіңіз.";
    }else{
        document.querySelector(".remark").innerHTML="Ескертпе: Қанағаттанарлықсыз, қайталап көріңіз.";
    }
    
//    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click",function(){
    location.reload();

});

document.getElementById("about").addEventListener("click",function(){
    alert("Quiz Website Project Created By Digvijay Singh");

});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



/*Smooth Scroll End*/
