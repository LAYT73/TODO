import React, { useState } from 'react';
import { useTodos } from '../model/useTodos';
import Input from '@/shared/ui/Input';
import Plus from '@/assets/Plus.svg';
import styles from './TodoInput.module.css';
import Image from 'next/image';
const TodoInput: React.FC = () => {
  const [task, setTask] = useState('');
  const [isNotEmpty, setIsNotEmpty] = useState(true);
  const { addTodo } = useTodos();

  const handleAdd = () => {
    if (task.trim()) {
      addTodo({
        id: Date.now(),
        text: task,
        completed: false,
      });
      setTask('');
    }
  };

  return (
    <div className={styles.todo_input}>
      <Input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button className={styles.add_button} onClick={handleAdd}>
        <Image src={Plus} alt="Picture of the author"></Image>
      </button>
    </div>
  );
};

export default TodoInput;
