import { memo } from 'react';
import { Form, FormProps } from '../../commons/Form';
import { FormInput, FormInputProps } from '../../commons/FormInput';

export type TodoFormProps = {
  formTitle: FormProps['title'];
  title: string;
  onChangeTitle: FormInputProps['onChange'];
  errorTitle: FormInputProps['errMessage'];
  content: string;
  onChangeContent: FormInputProps['onChange'];
  errorContent: FormInputProps['errMessage'];
  onSubmit: () => void;
};

export const TodoForm: React.FC<TodoFormProps> = memo((props) => {
  return (
    <Form title={props.formTitle} onSubmit={props.onSubmit}>
      <FormInput
        labelName="タイトル"
        name="title"
        value={props.title}
        onChange={props.onChangeTitle}
        errMessage={props.errorTitle}
      />
      <FormInput
        labelName="内容"
        name="content"
        value={props.content}
        onChange={props.onChangeContent}
        errMessage={props.errorContent}
      />
    </Form>
  );
});

TodoForm.displayName = 'TodoForm';
