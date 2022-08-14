import { ComponentProps, memo } from 'react';
import { Form } from '../../commons/Form';

export type TodoFormProps = {
  formTitle: ComponentProps<typeof Form>['title'];
  title: string;
  onChangeTitle: ComponentProps<typeof Form.Input>['onChange'];
  errorTitle: ComponentProps<typeof Form.Input>['errMessage'];
  content: string;
  onChangeContent: ComponentProps<typeof Form.Input>['onChange'];
  errorContent: ComponentProps<typeof Form.Input>['errMessage'];
  onSubmit: () => void;
};

export const TodoForm: React.FC<TodoFormProps> = memo((props) => {
  return (
    <Form title={props.formTitle} onSubmit={props.onSubmit}>
      <Form.Input
        labelName="タイトル"
        name="title"
        value={props.title}
        onChange={props.onChangeTitle}
        errMessage={props.errorTitle}
      />
      <Form.Input
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
