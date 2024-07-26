import { Field, ErrorMessage } from "formik";
import LocationSVG from "../assets/SVG/LocationSVG";

export default function SelectInputForm(props) {
  const { name, type, placeholder, label, options } = props;
  props;
  return (
    <div className="">
      <label htmlFor={name} className="text-white font-semibold text-xl">
        {label}
      </label>
      <div className="relative mt-2 w-full">
        <div className="absolute top-3 left-4">
          <LocationSVG />
        </div>
        <Field
          name={name}
          type={type}
          as="select"
          placeholder={placeholder}
          className="w-full py-3 pl-12 pr-6 border rounded-lg text-base font-medium text-black text-opacity-50"
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Field>
        <ErrorMessage
          name={name}
          component="span"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </div>
  );
}
