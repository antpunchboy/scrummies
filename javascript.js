function creating() {
    alert("Generating Scrummy pin...");
    let randomstring = Math.random().toString(36).slice(-8);
    document.getElementById("output").value = randomstring;
};

function joining() {
    let pin = prompt(`Type in the Scrummy pin
(does not work, still learning about mongoDB database to let people create their own accounts)`);
    if (pin === "" || pin.trim().length === 0) {
        alert("Invalid pin");
    }
    else if (pin !== null) {
        alert(`entering Scrummy [${pin.replace(/\s/g, "").slice(0, 8)}]...`);
        document.getElementById("output").value = pin.replace(/\s/g, "").slice(0, 8);
    }
};

// Load content onload if it exists in localStorage
window.onload = function() {
	if(localStorage.getItem('content1')) {
        document.querySelector('.content1').innerHTML = localStorage.getItem('content1');
  };
    if(localStorage.getItem('content2')) {
        document.querySelector('.content2').innerHTML = localStorage.getItem('content2');
  };
    if(localStorage.getItem('content3')) {
        document.querySelector('.content3').innerHTML = localStorage.getItem('content3');
  };
    if(localStorage.getItem('content4')) {
        document.querySelector('.content4').innerHTML = localStorage.getItem('content4');
  };
    if(localStorage.getItem('content5')) {
        document.querySelector('.content5').innerHTML = localStorage.getItem('content5');
  };
    if(localStorage.getItem('comment')) {
        document.querySelector('.comment_text').innerHTML = localStorage.getItem('comment');
  };
};

//let editBtn = document.querySelector('#edit_content');
//let content = document.querySelector('.content');

function saving1() {
    localStorage.setItem('content1', document.querySelector('.content1').innerHTML);
};

function saving2() {
    localStorage.setItem('content2', document.querySelector('.content2').innerHTML);
};

function saving3() {
    localStorage.setItem('content3', document.querySelector('.content3').innerHTML);
};

function saving4() {
    localStorage.setItem('content4', document.querySelector('.content4').innerHTML);
};

function saving5() {
    localStorage.setItem('content5', document.querySelector('.content5').innerHTML);
};

function sending() {
    document.getElementById("comtext").innerHTML += "You: " + document.getElementById("chatt").value + `\n` + `\n`;
    document.getElementById("chatt").value = "";
    // Revelation: getElementsByClassName is to getElementById like querySelectorAll is to querySelector
};

function commentsaving() {
    localStorage.setItem('comment', document.querySelector('.comment_text').innerHTML);
};

function commentclearing() {
    document.querySelector(".comment_text").innerHTML = "";
};

function resetting() {
    let reset_decision = prompt(`Are you sure?
(type YES to reset)`);
    if (reset_decision === "YES") {
        alert("Resetting...");
        localStorage.clear();
        window.location.reload();
    }
    else {
        alert("Reset cancelled");
    };
};
