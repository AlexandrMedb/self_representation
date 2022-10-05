import React, { useState } from "react";

import {
  useAddTaskMutation,
  useDeleteTaskMutation,
  useGetTasksQuery,
} from "./taskListSlice";

export const TaskList = () => {
  const [newTask, setNewTAsk] = useState("");
  const [count, setCount] = useState("");

  const { data = [], isLoading } = useGetTasksQuery(count);
  const [addTask, { isError }] = useAddTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const handleAddTAsk = async () => {
    if (newTask) {
      await addTask({ task: newTask }).unwrap();
    }
    setNewTAsk("");
  };

  const handleDeleteProduct = async (id: string | number) => {
    await deleteTask(id).unwrap();
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  return (
    <div>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTAsk(e.target.value)}
        />
        <button onClick={handleAddTAsk}>Add product</button>
      </div>
      <div>
        <select value={count} onChange={(e) => setCount(e.target.value)}>
          <option value="">all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <ul>
        {data.map((item: any) => (
          <li key={item.id} onClick={() => handleDeleteProduct(item.id)}>
            {item.task}
          </li>
        ))}
      </ul>
    </div>
  );
};
