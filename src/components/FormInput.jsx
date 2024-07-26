import { ErrorMessage, Field } from "formik";

export default function FormInput(props) {
  const { name, type, placeholder, label } = props;
  return (
    <div className="">
      <label htmlFor={name} className="text-white font-semibold text-xl">
        {label}
      </label>
      <div className="relative mt-2 w-full">
        <Field
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full py-3 px-6 border rounded-lg text-base font-medium text-black text-opacity-50"
        />
        <ErrorMessage
          name={name}
          component="span"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </div>
  );
}
