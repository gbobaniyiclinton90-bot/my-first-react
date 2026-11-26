import { useEffect, useState } from "react";

type TodoProps = {
  id: number;
  text: string;
};

const Todo = () => {
  const [inputValue, setInputvalue] = useState("");

  const [todos, setTodos] = useState<TodoProps[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? (JSON.parse(savedTodos) as TodoProps[]) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };

      setTodos([...todos, newTodo]);
      setInputvalue("");
    }
  };

  return (
    <section
      aria-labelledby="todo-heading"
      className="mx-auto my-12 w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-8"
    >
      <header className="mb-7 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Your space, in order
          </p>
          <h2
            id="todo-heading"
            className="text-3xl font-bold tracking-tight text-slate-900"
          >
            My tasks
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            A little progress adds up.
          </p>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800">
          {todos.length} {todos.length === 1 ? "task" : "tasks"}
        </span>
      </header>

      <div className="mb-7 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          aria-label="New task"
          placeholder="What needs to get done?"
          value={inputValue}
          onChange={(e) => setInputvalue(e.target.value)}
          className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white focus:ring-4 focus:ring-emerald-600/10"
        />
        <button
          type="button"
          onClick={addTodo}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-700/25"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="h-4 w-4"
          >
            <path
              d="M10 4v12M4 10h12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          Add task
        </button>
      </div>

      {todos.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 px-5 py-10 text-center">
          <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-emerald-700 shadow-sm ring-1 ring-slate-200">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
            >
              <path
                d="m7 12 3.2 3.2L17.5 8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <p className="text-sm font-semibold text-slate-800">
            Your list is clear
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Add a task above to get started.
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 transition hover:border-emerald-200 hover:bg-emerald-50/30"
            >
              <span
                aria-hidden="true"
                className="h-5 w-5 shrink-0 rounded-full border-2 border-slate-300"
              />
              <span className="min-w-0 flex-1 break-words text-sm font-medium text-slate-700">
                {todo.text}
              </span>

              <div className="group relative ml-2 shrink-0">
                <button
                  type="button"
                  aria-label={`More options for ${todo.text}`}
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-700/15"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <circle cx="10" cy="4" r="1.5" />
                    <circle cx="10" cy="10" r="1.5" />
                    <circle cx="10" cy="16" r="1.5" />
                  </svg>
                </button>

                <div className="invisible absolute right-0 top-full z-10 mt-1 w-40 translate-y-1 rounded-xl border border-slate-200 bg-white p-1.5 opacity-0 shadow-lg shadow-slate-900/10 transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <button
                    type="button"
                    className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-rose-600 transition hover:bg-rose-50 focus-visible:bg-rose-50 focus-visible:outline-none"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4"
                    >
                      <path
                        d="M4.5 6h11m-9.5 0 .6 10h5.8l.6-10M8 6V4.5h4V6m-3 3v4m2-4v4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Delete task
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Todo;
