import { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask";
import ListTask from "./components/ListTask";
import { Flex } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { Heading } from '@chakra-ui/react'

function App() {
  const [tasks, setTasks] = useState([]);

  console.log("tasks", tasks);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
  }, []);

  return (
    <>


      <Toaster />

      <Flex
        as="main"
        direction="column"
        py="6"
        px="6"
        // bgColor="gray.800"
        h={{
          sm: "100vh",
          md: "100vh",
          lg: "100vh",
          xl: "100vh",
        }}
        bg="Black"
        alignItems="center"
      >
        <Heading
          color="cyan"
          alignItems="center"
          paddingTop="20" >
          TODO APP</Heading>

        <CreateTask tasks={tasks} setTasks={setTasks} />
        <br></br>
        <div className="" style={{marginTop: "20px"}}>
        <ListTask tasks={tasks} setTasks={setTasks} />

        </div>
      </Flex>

    </>
  );
}

export default App;
