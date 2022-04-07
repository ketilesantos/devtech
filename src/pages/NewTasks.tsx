import React, { useState } from 'react';
import { NewTask } from '../components/NewTasks/NewTask';
import { DeleteTask } from '../components/NewTasks/DeleteTask';
import { FinishedTask } from '../components/NewTasks/FinishedTask';
import { ITasks } from '../types/interface';

export const NewTasks = (): JSX.Element => {
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenFinished, setIsOpenFinished] = useState(false);
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [task, setTask] = useState<ITasks>();

  const handleDelete = (seletedTask: ITasks) => {
    setTask(seletedTask);
    setIsOpenDelete(true);
  };

  const handleFinished = (seletedTask: ITasks) => {
    setTask(seletedTask);
    setIsOpenFinished(true);
  };

  console.log(tasks);

  return (
    <>
      <NewTask onDelete={handleDelete} onFinished={handleFinished} setTasks={setTasks} tasks={tasks} />
      <DeleteTask
        selectedTask={task}
        tasks={tasks}
        onTasks={setTasks}
        isOpenDelete={isOpenDelete}
        onIsOpenDelete={setIsOpenDelete}
      />
      <FinishedTask
        selectedTask={task}
        tasks={tasks}
        onTasks={setTasks}
        isOpenFinished={isOpenFinished}
        onIsOpenFinished={setIsOpenFinished}
      />
    </>
  );
};
