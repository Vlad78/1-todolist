import { FC } from "react";

type TodoListProps = {
  title: string;
  tasks: TaskType[];
};

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

const TodoList: FC<TodoListProps> = ({ title, tasks }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      {tasks.length === 0 ? (
        <div>no tasks</div>
      ) : (
        <ul>
          {tasks.map((e) => (
            <li key={e.id}>
              <input type="checkbox" checked={e.isDone} />
              <span>{e.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
    // <div>
    //   <h3>{title}</h3>
    //   <div>
    //     <input />
    //     <button>+</button>
    //   </div>
    //   <ul>
    //     <li>
    //       <input type="checkbox" checked={true} />
    //       <span>HTML&CSS</span>
    //     </li>
    //     <li>
    //       <input type="checkbox" checked={true} />
    //       <span>JS</span>
    //     </li>
    //     <li>
    //       <input type="checkbox" checked={false} />
    //       <span>React</span>
    //     </li>
    //   </ul>
    //   <div>
    //     <button>All</button>
    //     <button>Active</button>
    //     <button>Completed</button>
    //   </div>
    // </div>
  );
};

export default TodoList;
