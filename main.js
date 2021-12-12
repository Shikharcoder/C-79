names = [];

function submit() {
    var name1 = document.getElementById("name_of_the_student_1").value;
    var name2 = document.getElementById("name_of_the_student_2").value;
    var name3 = document.getElementById("name_of_the_student_3").value;
    var name4 = document.getElementById("name_of_the_student_4").value;

    names.push(name1);
    names.push(name2);
    names.push(name3);
    names.push(name4);

    console.log(names);
    document.getElementById("display_names").innerHTML = names;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
function sorting() {
    names.sort();
    
    console.log(names);

    document.getElementById("display_names").innerHTML = names;
}