// variable declerations
var feature_btn =  document.querySelector('.features a');
var modalBox = document.querySelector('.modal-container');
var scrollAt;


// Event Listners
feature_btn.addEventListener("click", function(){
    var feature_nodes = document.querySelectorAll('.feature-list li');
    var feature_node = document.querySelector('.feature-list');
    if(feature_btn.innerHTML == "See All Features")
    {
        feature_btn.innerHTML = "Show Less Features";
        feature_nodes.forEach( function(val) {
            feature_node.appendChild(val.cloneNode(true));
        });
        scrollAt = window.scrollY;
    } else {
        window.scroll({
          top: scrollAt,
          left: 0,
          behavior: 'smooth'
        });
        feature_btn.innerHTML = "See All Features";
        feature_nodes.forEach( function(val, index) {
            if(index>5)
                val.remove();
        });
    }
})


document.querySelector('.sign-in').addEventListener("click", function(){
    modalBox.classList.remove("hide-me");
});

modalBox.addEventListener("click", function(){
    modalBox.classList.add("hide-me");
    document.querySelector('form').reset();
    document.querySelectorAll('.error').forEach(function(val){val.classList.add("hide-me")});
});

document.querySelector('.modal').addEventListener("click", function(e){e.stopImmediatePropagation()});

document.querySelector('.sub-list-container').addEventListener("click", function(e){
    document.querySelector('.sub-list').classList.remove("hide-me");
    e.stopImmediatePropagation();
});

document.addEventListener("click", function(){
    document.querySelector('.sub-list').classList.add("hide-me");
});

document.querySelector('nav').addEventListener("click", function(){
    document.querySelector('.nav-list').classList.toggle("hide-togal");
    this.classList.toggle("cross-icon");
    document.querySelector('.language').classList.toggle("hide-togal");
    document.querySelector('.sign-in').classList.toggle("hide-togal");
});

document.querySelector('.nav-list').addEventListener("click", function(e){ e.stopImmediatePropagation() });








