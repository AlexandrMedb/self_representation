import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Task = {
  id: number;
  task: string;
};

export const taskApi = createApi({
  reducerPath: "taskApi",
  tagTypes: ["Tasks"],
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (build) => ({
    getTasks: build.query<Task[], string>({
      query: (limit = "") => `tasks?${limit && `_limit=${limit}`}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Tasks" as const, id })),
              { type: "Tasks", id: "LIST" },
            ]
          : [{ type: "Tasks", id: "LIST" }],
    }),
    addTask: build.mutation<Task, Omit<Task, "id">>({
      query: (body) => ({
        url: "tasks",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Tasks", id: "LIST" }],
    }),
    deleteTask: build.mutation<void, number | string>({
      query: (id) => ({
        url: `tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Tasks", id: "LIST" }],
    }),
  }),
});

export const { useAddTaskMutation, useDeleteTaskMutation, useGetTasksQuery } =
  taskApi;
