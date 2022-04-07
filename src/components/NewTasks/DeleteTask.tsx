import React from 'react';
import { SimpleModal } from '../SimpleModal';
import { ITasks } from '../../types/interface';

interface DeleteTaskProps {
  isOpenDelete: boolean;
  onIsOpenDelete: (value: boolean) => void;
  selectedTask?: ITasks;
  tasks: ITasks[];
  onTasks: (value: ITasks[]) => void;
}

export const DeleteTask = ({
  isOpenDelete,
  onIsOpenDelete,
  selectedTask,
  tasks,
  onTasks,
}: DeleteTaskProps): JSX.Element => {
  const handleDelete = () => {
    const tasksFiltered = tasks.filter((task) => task.id !== selectedTask?.id);
    onTasks(tasksFiltered);
    onIsOpenDelete(false);
  };

  return (
    <SimpleModal
      title="Deseja excluir?"
      subtitle={`Tem certeza que deseja excluir task ${selectedTask?.newTask}?`}
      isOpenModal={isOpenDelete}
      onOpenModal={onIsOpenDelete}
      onClick={handleDelete}
      titleButtonConfirmation="Excluir"
    />
  );
};
