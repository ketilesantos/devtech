import React from 'react';
import { SimpleModal } from '../SimpleModal';
import { ITasks } from '../../types/interface';

interface FinishedTaskProps {
  isOpenFinished: boolean;
  onIsOpenFinished: (value: boolean) => void;
  selectedTask?: ITasks;
  tasks: ITasks[];
  onTasks: (value: ITasks[]) => void;
}

export const FinishedTask = ({
  onIsOpenFinished,
  isOpenFinished,
  selectedTask,
  tasks,
  onTasks,
}: FinishedTaskProps): JSX.Element => {
  const handleFinished = () => {
    const tasksFiltered = tasks.map((task) => (task.id === selectedTask?.id ? { ...task, status: 'FINISHED' } : task));
    onTasks(tasksFiltered);
    onIsOpenFinished(false);
  };

  return (
    <SimpleModal
      title="Deseja excluir finalizar?"
      subtitle={`Tem certeza que deseja finalizar a task ${selectedTask?.newTask}?`}
      isOpenModal={isOpenFinished}
      onOpenModal={onIsOpenFinished}
      onClick={handleFinished}
      titleButtonConfirmation="Finalizar"
    />
  );
};
