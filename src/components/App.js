import React, { useState } from "react";
import { CATEGORIES, TASKS } from "../data";
import "../index.css";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import CategoryFilter from "./CategoryFilter";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleTaskDelete(taskText) {
    const updatedTasks = tasks.filter((task) => task.text !== taskText);
    setTasks(updatedTasks);
  }

  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  const categoriesToDisplay = CATEGORIES.filter((category) => category !== "All");

  const tasksToDisplay =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categoriesToDisplay}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <TaskList tasks={tasksToDisplay} onDeleteTask={handleTaskDelete} />
      <NewTaskForm
        categories={categoriesToDisplay}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
    </div>
  );
}
export default App;