import createTasksList from './modules/createTasksList';
import taskCalls from './modules/taskCalls';
import deleteData from './services/deleteData';

const link = 'https://to-do-list-573d3-default-rtdb.firebaseio.com/data.json';

createTasksList(link); 

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  taskCalls('.btn-add', link, '#text');
  deleteData(link);
});