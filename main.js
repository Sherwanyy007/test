const submitBtn = document.getElementById('button')

let gendars = document.querySelectorAll('.gendar')

const studentName = document.getElementById('student-name')
const studentAge = document.getElementById('student-age')
const studentGendar = document.getElementById('student-gendar')
const isStudent = document.getElementById('is-student')
const studentCity = document.getElementById('studnent-city')

function showInfo(e) {
	e.preventDefault()
	const fName = document.getElementById('f-name').value
	const sName = document.getElementById('s-name').value
	const age = document.getElementById('age').value
	const city = document.getElementById('city').value
	const student = document.getElementById('student')

	let gendar = ""
	for (var i = 0; i < gendars.length; i++) {
		if (gendars[i].checked){
			gendar = gendars[i].value
		}
	}
	studentName.innerText = "${fName} ${sName}"
	studentAge.innerText = age
	studentGendar.innerText = gendar

	if(student.checked){
		isStudent.innerText = 'bale'
	}
	else{
		isStudent.innerText = 'naxer'
	}
	studentCity.innerText = city

}







submitBtn.addEventListener('click', showInfo)