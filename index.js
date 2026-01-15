




// Tab Switching Logic
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Disease-Food Recommendation Logic
function updateDiet() {
    const selection = document.getElementById("diseaseSelect").value;
    const resultBox = document.getElementById("dietResult");
    
    const diets = {
        fever: "Eat light foods like Khichdi, soups, and plenty of fluids. Avoid cold drinks.",
        diabetes: "Focus on whole grains, green leafy vegetables, and fiber. Limit sugar and white rice.",
        anemia: "Increase intake of spinach, beetroot, jaggery (Gur), and pomegranate to boost iron."
    };
    
    resultBox.innerHTML = diets[selection];
    resultBox.style.background = "#e8f5e9";
    resultBox.style.padding = "10px";
    resultBox.style.marginTop = "10px";
    resultBox.style.borderRadius = "5px";
}