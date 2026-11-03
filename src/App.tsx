import { useAppDispatch, useAppState } from "./store/hooks";
import { increment, decrement, add } from "./store/counterSlice/counterSlice";

import "./App.css";
import {
  usersFetchingUserById,
  usersFetchingUsers,
} from "./store/usersSlice/usersSlice";

function App() {
  const counter = useAppState((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const { users, user, loading, error } = useAppState((state) => state.users);
  return (
    <>
      <div>
        Counter:{counter}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(add(10))}>+10</button>
      </div>

      <div>
        <h1>Fetching</h1>
        <button onClick={() => dispatch(usersFetchingUsers())}>Ok</button>
        {loading && "Loading"}
        {error && "Error"}
        {users && users.map((item) => <div key={item.id}>{item.name}</div>)}
        <button onClick={() => dispatch(usersFetchingUserById(5))}>user check</button>
        <h2>User info: {user?.name}</h2>
      </div>
    </>
  );
}

export default App;
