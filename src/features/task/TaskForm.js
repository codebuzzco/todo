import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Stack } from '@chakra-ui/react';

const TaskForm = ({ onSubmit }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful, isValid },
  } = useForm({ mode: 'onChange' });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Input
          {...register('task', { required: true })}
          autoComplete="off"
          autoFocus
        />
        <Button type="submit" disabled={!isValid}>
          Add task
        </Button>
      </Stack>
    </form>
  );
};

export default TaskForm;
