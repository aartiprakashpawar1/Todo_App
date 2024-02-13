import React, { useState } from "react";
import { Button, Input, Flex } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";   
import toast from "react-hot-toast";

const CreateTask = ({ tasks, setTasks }) => {
  //sate for single task
  const [task, setTask] = useState({        
    id: "",
    name: "",
    status: "todo", 
  });

  const handleSubmit = (e) => {
  
    e.preventDefault();

    if (task.name.length < 3) {
      return toast.error("Task must have atleast 3 characters");
    }
    if (task.name.length > 100) {
      return toast.error("Task must not have more than 100 characters");
    }

    setTasks((prev) => {
      const list = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });

    toast.success("Task Created");

    setTask({
      id: "",
      name: "",
      status: "todo",
    });
  };


  function onChangeValue(e){
    setTask({ ...task, id: uuidv4(), name: e.target.value })
  }

  return (
  
      <Flex gap="5" mt="40px">
        <Input
          placeholder="Enter your Task"
          bg="white"
          value={task.name}
          onChange={(e) => onChangeValue(e) }
        />
        <Button type="submit" colorScheme="green" onClick={handleSubmit}>
          Create
        </Button>
      </Flex>
   
  );
};

export default CreateTask;
