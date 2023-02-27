import renderSingleTodoItem from "../components/single/todo.single";
import { editWrapper, todosItems, render } from "../index";
import { LOCAL_STORAGE_KEY } from "./constants";

// const data = [
//   {
//     title: "First todo",
//     subTitle: "Some Text",
//     isChecked: false,
//     date: "2023-02-11",
//   },
//   {
//     title: "Sec todo",
//     subTitle: "Some Text",
//     isChecked: true,
//     date: "2023-02-11",
//   },
//   {
//     title: "Third todo",
//     subTitle: "Some Text",
//     isChecked: false,
//     date: "2023-02-11",
//   },
// ];

export function getDataFromLocalStorage() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

export function setDataToLocalStorage(data) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

export function resetInitialUI() {
  todosItems.innerHTML = "";
  editWrapper.innerHTML = "";
}

export function renderTodos() {
  const todos = getDataFromLocalStorage();
  todos.forEach((el) => {
    const createdEl = renderSingleTodoItem(el);
    todosItems.appendChild(createdEl);
  });
}

export function openEditingItem({ title, subTitle, date, isChecked }) {
  render(title, subTitle, date, isChecked);
}
