import { ButtonHTMLAttributes, memo, NamedExoticComponent } from 'react';
import { Input } from './Input';

export type FormProps = {
  title: string;
  children: React.ReactNode;
  onSubmit: NonNullable<ButtonHTMLAttributes<HTMLButtonElement>['onClick']>;
};

export const Form = memo((props) => {
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
}) as NamedExoticComponent<FormProps> & {
  Input: typeof Input;
};

Form.displayName = 'Form';
Form.Input = Input;
