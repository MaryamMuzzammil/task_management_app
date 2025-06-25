
import { getTaskById } from '@/app/actions/task';
import React from 'react';

const TaskDetail = async ({ params }: { params: { id: string } }) => {
  const Task = await getTaskById(Number(params.id));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Task</h1>
      <p><strong>Task:</strong> {Task.data?.taskName}</p>
    </div>
  );
};

export default TaskDetail;