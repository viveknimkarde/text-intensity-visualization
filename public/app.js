/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
$(document).ready(function(){
    $("#myForm").submit(function(event){
        event.preventDefault();
        var doc = document.getElementById('output');
        doc.innerHTML = "";
        myFunction()
    });
    
});
function myFunction() {
    var doc = document.getElementById('output');
    var input  = JSON.parse(document.getElementById('response').value);
    var create_text_line = function(word_intensity,word,sentence_intensity){
        var words = '<div class="words">';
        var sentence = '<div class="sentence"><span class="sentence-card" style="background-color:hsl(0, 0%, '+(94-60*sentence_intensity)+'%);">'+sentence_intensity+'</span></div>';
        for(var j = 0 ; j < word_intensity.length; j++){
            console.log(words);
            words = words+'<span class="word-card" style="background-color:hsl(0, 0%, '+(94-60*word_intensity[j])+'%);">'+word[j] +
                '</span>';
        }
        words = words+'</div>';
        return '<div class="paragraph">'+sentence+words+'</div>';
    }
    for(var i = 0; i < input.sentence_weights.length ; i ++){
        var division = document.createElement('div');
        division.innerHTML = create_text_line(input.word_weights[i],input.words[i],input.sentence_weights[i],i);
        doc.appendChild(division);

    }
}
 