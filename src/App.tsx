import type { Component } from 'solid-js';
import { For } from 'solid-js';

import styles from './App.module.css';
import { usersResource } from './users.resource';

const App: Component = () => {
  const [users] = usersResource;

  return (
    <div class={styles.App}>
      <h2>Users</h2>

      <ul>
        <For each={users()}>
          {(user) => (
            <li>
              {user.name} ({user.email})
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default App;
