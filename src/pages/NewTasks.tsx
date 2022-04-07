import React, { useState } from 'react';
import { NewTask } from '../components/NewTasks/NewTask';
import { DeleteTask } from '../components/NewTasks/DeleteTask';
import { FinishedTask } from '../components/NewTasks/FinishedTask';
import { ITasks } from '../types/interface';

interface NewTaskProps {
  tasks: ITasks[];
  setTasks: (task: ITasks[]) => void;
}

export const NewTasks = ({ tasks, setTasks }: NewTaskProps): JSX.Element => {
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenFinished, setIsOpenFinished] = useState(false);
  const [task, setTask] = useState<ITasks>();

  const handleDelete = (seletedTask: ITasks) => {
    setTask(seletedTask);
    setIsOpenDelete(true);
  };

  const handleFinished = (seletedTask: ITasks) => {
    setTask(seletedTask);
    setIsOpenFinished(true);
  };

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
