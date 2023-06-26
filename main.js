var tablinks = document.getElementsByClassName('tab-links');
var tabcontent= document.getElementsByClassName('tab-content');

function opentab(name){
    for(i of tablinks){
        i.classList.remove('active-link')
    }
    for(j of tabcontent){
        j.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(name).classList.add('active-tab')
}


function openmenu(){
    document.getElementById('smenu').style.right='0px';

}
function closemenu(){
    document.getElementById('smenu').style.right='-200px';
}