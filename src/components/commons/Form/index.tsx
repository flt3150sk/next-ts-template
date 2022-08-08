import { ButtonHTMLAttributes, memo } from 'react';

export type FormProps = {
  title: string;
  children: React.ReactNode;
  onSubmit: NonNullable<ButtonHTMLAttributes<HTMLButtonElement>['onClick']>;
};

export const Form: React.FC<FormProps> = memo((props) => {
  return (
    <>
      <form>
        <fieldset>
          <legend>{props.title}</legend>
          {props.children}
        </fieldset>
      </form>
      <button onClick={props.onSubmit}>送信する</button>
    </>
  );
});

Form.displayName = 'Form';
