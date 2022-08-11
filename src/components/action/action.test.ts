import { addTodo, toggleTodo } from "./actions";

test("addTodo returns an object", () => {
  let testTodo = {
    id: "todo-test-1",
    title: "Testing a todo",
    done: false
  }
  let result = addTodo(testTodo)

  let resultObj = {
    type: "ADD_TODO",
    payload: testTodo
  }
  expect(result).toEqual(resultObj)
})
test("toggle todo returns an object", () => {

  let result = toggleTodo("testid-1")

  let resultObj = {
    type: "TOGGLE_TODO",
    payload: "testid-1"
  }
  expect(result).toEqual(resultObj)
})