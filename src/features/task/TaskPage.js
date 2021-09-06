import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import {
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import TaskForm from './TaskForm';
import Task from './Task';

const TaskPage = () => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleOnSubmitTask = task => {
    const id = uuidv4();
    setTasks(tasks.concat({ ...task, id, completed: false }));
  };

  const handleOnClickCheck = taskId => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleOnClickDelete = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <>
      <Image
        src="cover.jpg"
        h="300px"
        w="full"
        objectFit="cover"
        position="absolute"
        zIndex="-1"
      />
      <Container>
        <Stack>
          <Stack
            spacing={4}
            p={6}
            bg="white"
            rounded="md"
            shadow="md"
            marginTop="180px"
          >
            <Flex alignItems="center" justifyContent="space-between">
              <HStack>
                <Heading size="xl">{format(new Date(), 'dd')}</Heading>
                <Flex flexDirection="column">
                  <Text>{format(new Date(), 'MMMM')}</Text>
                  <Text color="gray.500">{format(new Date(), 'yyyy')}</Text>
                </Flex>
              </HStack>
              <Heading size="sm">{format(new Date(), 'EEEE')}</Heading>
            </Flex>
            <TaskForm onSubmit={handleOnSubmitTask} />
          </Stack>
          {tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              onClickCheck={handleOnClickCheck}
              onClickDelete={handleOnClickDelete}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default TaskPage;
