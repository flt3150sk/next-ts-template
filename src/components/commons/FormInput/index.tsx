import { InputHTMLAttributes, memo } from 'react';

export type FormInputProps = {
  labelName: string;
  name: NonNullable<InputHTMLAttributes<HTMLInputElement>['name']>;
  value: NonNullable<InputHTMLAttributes<HTMLInputElement>['value']>;
  onChange: NonNullable<InputHTMLAttributes<HTMLInputElement>['onChange']>;
  errMessage: string | undefined;
};

export const FormInput: React.FC<FormInputProps> = memo(
  ({ labelName, errMessage, ...restProps }) => {
    return (
      <div>
        <label>
          {labelName}
          <input type="text" {...restProps} />
        </label>
        {errMessage && <p>{errMessage}</p>}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';
