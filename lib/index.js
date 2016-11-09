var store = {teachers: []}

class Teacher {
  constructor(name, hometown) {
    this.name = name;
    this.hometown = hometown;
    store.teachers = [...store.teachers, this]
  }
}

$(document).ready(function() {
  $( "input[type='submit']" ).click(function(event) {
    //stop the refresh action from taking place with the submit button
    event.preventDefault();
    //set variables equal to the input field values
    var name = $("input[name='teacher[name]']").val()
    var hometown = $("input[name='teacher[hometown]']").val()
    //create a new teacher instance
    new Teacher(name, hometown)
    //clear the input fields for the next teacher input
    $("input[name='teacher[name]']").val('')
    $("input[name='teacher[hometown]']").val('')
    //empty the container tag
    $('.container ul').empty()
    //fill the container tag with information for each teacher
    store.teachers.forEach(function(teacher) {
      $('.container ul').append(`<li> name: ${teacher.name} hometown: ${teacher.hometown} </li>`)
    })
  })
})
