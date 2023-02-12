type AddTodo = (todo: Todo) => void;

type deleteItem = (id: number) => void

type toggleItem = (id: number) => void;

type enterEditMode = (todo: Todo) => void

type closeEditMode  = () => void


type Todo = {
  name: string;
  checked: boolean;
  id: number;
};

// type TodoProps = {
//   AddTodo: AddTodo;
// };
