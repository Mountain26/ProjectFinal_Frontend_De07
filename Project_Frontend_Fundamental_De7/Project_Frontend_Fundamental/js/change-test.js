document.addEventListener('DOMContentLoaded', () =>{
let tests = JSON.parse(localStorage.getItem('tests')) || [];
  let questions = [];
  let currentEditingQuestionId = null;
  let deleteQuestionId = null;
  let questionModal = new bootstrap.Modal(document.getElementById('questionModal'));
  let editQuestionModal = new bootstrap.Modal(document.getElementById('editQuestionModal'));
  let deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
  let addAnswerBtn = document.getElementById('addAnswerButton');
  let saveQuestionBtn = document.getElementById('saveQuestionButton');
  let answersContainer = document.getElementById('answersContainer');
  let questionTableBody = document.querySelector('.category-table tbody');
  let confirmDeleteBtn = document.querySelector('.confirm-delete');
  let selectedTestId = 1;
  let selectedTest = tests.find(test => test.id === selectedTestId);
  if(selectedTest){
      questions = selectedTest.questions;
  }
  function updateQuestionTable(){
      if(!questions.length){
          questionTableBody.innerHTML = '<tr><td colspan="3" class="text-center">Không có câu hỏi nào</td></tr>';
          return;
      }
      questionTableBody.innerHTML = questions.map((question, index) => `
          <tr>
              <td class="text-center">${index + 1}</td>
              <td class="text-start">${question.content}</td>
              <td>
                  <button class="btn btn-warning btn-sm edit-question" data-id="${question.id}">
                      Sửa
                  </button>
                  <button class="btn btn-danger btn-sm delete-question ms-2" data-id="${question.id}">
                      Xoá
                  </button>
              </td>
          </tr>
      `).join('');
  }
  addAnswerBtn.addEventListener('click', addAnswer);
  function addAnswer(){
      let answerIndex = answersContainer.children.length;
      let answerDiv = document.createElement('div');
      answerDiv.className = 'mb-3 answer-item';
      answerDiv.innerHTML = `
          <div class="input-group">
              <div class="input-group-text">
                  <input type="radio" name="correctAnswer" value="${answerIndex}">
              </div>
              <input type="text" class="form-control" placeholder="Nhập câu trả lời">
              <button class="btn btn-danger delete-answer" type="button">
                  <i class="bi bi-trash"></i>
              </button>
          </div>
      `;
      answersContainer.appendChild(answerDiv);
  }
  document.addEventListener('click', (e) =>{
      if (e.target.closest('.delete-answer')) {
          e.target.closest('.answer-item').remove();
          updateRadioValues();
      }
  });
  function updateRadioValues(){
      Array.from(answersContainer.children).forEach((item, index) =>{
          item.querySelector('input[type="radio"]').value = index;
      });
  }
  saveQuestionBtn.addEventListener('click', saveQuestion);
  function saveQuestion(){
      let questionContent = document.getElementById('questionContent').value;
      let answers = Array.from(answersContainer.querySelectorAll('.form-control'))
          .map(input => input.value.trim())
          .filter(value => value !== '');
      let correctAnswerIndex = parseInt(
          document.querySelector('input[name="correctAnswer"]:checked')?.value
      );
      if(!questionContent || answers.length < 2 || isNaN(correctAnswerIndex)){
          alert('Vui lòng điền đầy đủ thông tin câu hỏi và ít nhất 2 câu trả lời');
          return;
      }
      let question = {
          id: currentEditingQuestionId || Date.now(),
          content: questionContent,
          answers,
          correctAnswerIndex
      };
      if(currentEditingQuestionId){
          let index = questions.findIndex(q => q.id === currentEditingQuestionId);
          questions[index] = question;
          currentEditingQuestionId = null;
          editQuestionModal.hide();
      }else{
          questions.push(question);
          questionModal.hide();
      }
      updateQuestionTable();
      localStorage.setItem('tests', JSON.stringify(tests));
      clearForm();
  }
  document.addEventListener('click', (e) =>{
      if (e.target.closest('.edit-question')) {
          let questionId = parseInt(e.target.closest('button').dataset.id);
          let question = questions.find(q => q.id === questionId);
          loadQuestionForEdit(question);
      }
  });
  function loadQuestionForEdit(question){
      currentEditingQuestionId = question.id;
      document.getElementById('questionContent').value = question.content;
      answersContainer.innerHTML = '';
      question.answers.forEach((answer, index) => {
          let answerDiv = document.createElement('div');
          answerDiv.className = 'mb-3 answer-item';
          answerDiv.innerHTML = `
              <div class="input-group">
                  <div class="input-group-text">
                      <input type="radio" name="correctAnswer"
                          value="${index}" ${index === question.correctAnswerIndex ? 'checked' : ''}>
                  </div>
                  <input type="text" class="form-control" value="${answer}">
                  <button class="btn btn-danger delete-answer" type="button">
                      <i class="bi bi-trash"></i>
                  </button>
              </div>
          `;
          answersContainer.appendChild(answerDiv);
      });
      editQuestionModal.show();
  }
  document.addEventListener('click', (e) =>{
      if (e.target.closest('.delete-question')) {
          deleteQuestionId = parseInt(e.target.closest('button').dataset.id);
          deleteModal.show();
      }
  });
  confirmDeleteBtn.addEventListener('click', () =>{
      if (deleteQuestionId) {
          questions = questions.filter(q => q.id !== deleteQuestionId);
          updateQuestionTable();
          localStorage.setItem('tests', JSON.stringify(tests));
          deleteQuestionId = null;
          deleteModal.hide();
      }
  });
function clearForm(){
      document.getElementById('questionContent').value = '';
      answersContainer.innerHTML = '';
      addAnswer();
      addAnswer();
}
  updateQuestionTable();
  clearForm();
});