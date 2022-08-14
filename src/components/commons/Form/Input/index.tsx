import { memo, InputHTMLAttributes } from 'react';

export type InputProps = {
  labelName: string;
  name: NonNullable<InputHTMLAttributes<HTMLInputElement>['name']>;
  value: NonNullable<InputHTMLAttributes<HTMLInputElement>['value']>;
  onChange: NonNullable<InputHTMLAttributes<HTMLInputElement>['onChange']>;
  errMessage: string | undefined;
};

export const Input: React.FC<InputProps> = memo(({ labelName, errMessage, ...restProps }) => {
  return (
    <div>
      <label>
        {labelName}
        <input type="text" {...restProps} />
      </label>
      {errMessage && <p>{errMessage}</p>}
    </div>
  );
});

Input.displayName = 'FormInput';
