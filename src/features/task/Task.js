import { Check, Trash2 } from 'react-feather';
import { Circle, Flex, Icon, Text } from '@chakra-ui/react';

const Task = ({ task, onClickCheck, onClickDelete }) => {
  return (
    <Flex p={6} alignItems="center" rounded="md" shadow="md">
      {task.completed ? (
        <Circle
          as="button"
          bg="green.500"
          color="white"
          size={8}
          onClick={() => onClickCheck(task.id)}
        >
          <Icon as={Check} fontSize="lg" />
        </Circle>
      ) : (
        <Circle
          as="button"
          border="2px"
          borderColor="gray.300"
          size={8}
          onClick={() => onClickCheck(task.id)}
        />
      )}
      <Flex flexGrow={1}>
        <Text as={task.completed ? 'del' : 'text'} ml={2}>
          {task.task}
        </Text>
      </Flex>
      <Circle
        as="button"
        color="gray.400"
        size={8}
        onClick={() => onClickDelete(task.id)}
      >
        <Icon as={Trash2} fontSize="lg" />
      </Circle>
    </Flex>
  );
};

export default Task;
