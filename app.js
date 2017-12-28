function calculateGpa(){
    credits = document.getElementsByClassName('credit');
    grades = document.getElementsByClassName('grade');
    gpa = [];
    total = 0;
    sumOfCredits = 0
    for(var i = 0; i < grades.length; i++){
        switch(grades[i].value){
            case 'A':
                gpa[i] = 4
                break;
            case 'A-':
                gpa[i] = 3.67
                break;
            case 'B+':
                gpa[i] = 3.33
                break;
            case 'B':
                gpa[i] = 3
                break;
            case 'B-':
                gpa[i] = 2.67
                break;
                case 'C+':
                gpa[i] = 2.33
                break;
            case 'C':
                gpa[i] = 2
                break;
            case 'C-':
                gpa[i] = 1.67
                break;
            case 'F':
                gpa[i] = 0
                break;
        }
        sumOfCredits += parseInt(credits[i].value);
        total += gpa[i]*credits[i].value;
    }
    gpa = (total/sumOfCredits).toFixed(2)
    document.getElementById("gpa").innerHTML = "<p>Your GPA is : "+gpa+"</p>"
}
function refresh(){
    location.reload()
}
function addRow(){
    tr = document.createElement('tr')
    td = document.createElement("td")
    input = document.createElement('input')
    select = document.createElement('select')
    credits = [1,2,3,4,5]
    grades = ['A','A-','B+','B',"B-",'C+','C','C-','F']
    for(i=0;i<credits.length;i++){
        option = document.createElement('option')
        option.innerHTML = credits[i]
        select.add(option)
    }
    td.appendChild(input)
    tr.appendChild(td)
    td = document.createElement('td')
    select.className="credit"
    td.appendChild(select)
    tr.appendChild(td)
    select = document.createElement('select')
    select.className = "grade"
    for(i=0;i<grades.length;i++){
        option = document.createElement('option')
        option.innerHTML = grades[i]
        select.add(option)
    }
    td = document.createElement('td')
    td.appendChild(select)
    tr.appendChild(td)
    button = document.createElement('button')
    button.innerHTML = "Remove"
    button.id = "remove"
    button.className = "remove_button"
    button.addEventListener('click',removeRow)
    td = document.createElement('td')
    td.appendChild(button)
    tr.appendChild(td)
    table = document.getElementById('table')
    table.appendChild(tr)
}
function removeRow(){
    this.parentNode.parentNode.remove()
}