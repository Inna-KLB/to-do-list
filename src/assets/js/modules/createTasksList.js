import getData from '../services/getData';

const createTasksList = async(link) => {
  const taskList = document.querySelector('.task-list');
 
  return await getData(link) 
    .then(tasks => {
      tasks = Object.keys(tasks).map(key => {
        return {
          id: key,
          ...tasks[key]
        }
      })
    tasks.forEach(({value, id, status}) => {
      let task = document.createElement('li');
      task.classList.add('task-list__item');
      task.setAttribute('draggable', 'true');
      task.innerHTML = `
        <label for="${id}">
        <input type="checkbox" data-checked="${status}" name="checkbox" id="${id}" class="checkbox">
        <span>${value}</span>
        </label>
        <button data-delete="${id}" class="btn-delete">&#10006;</button>`;
        if (status === true) {
          task.classList.add('checked');
          taskList.append(task);
        } else {
          task.classList.remove('checked');
          taskList.prepend(task);
        }
      });     
    })
    .catch(error => console.log(error));
};

export default createTasksList;