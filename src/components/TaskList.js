import TaskItem from "./TaskItem";

import styles from "./TaskList.module.css";

const TaskList = ({ tasks , deleteTask, updateTask, enterEditMode }) => {
  return (
    <div>
      <ul className={styles.tasks}>
        {tasks.sort((a, b) => b.id - a.id).map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} enterEditMode={enterEditMode}/>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
