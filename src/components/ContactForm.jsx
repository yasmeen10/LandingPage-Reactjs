import { Formik, Form } from "formik";
import * as Yup from "yup";
import { phoneNumberRegex } from "../constants/phoneNumberRegex";
import FormInput from "./FormInput";
import SelectInputForm from "./SelectInputForm";

const options = ["Egypt", "Saudi Arabia", "UAE"];

export default function ContactForm() {
  const initialValues = {
    pickUpLocation: "",
    pickUpDate: "",
    deliveryLocation: "",
    deliveryDate: "",
    weight: "",
    loadCategory: "",
    companyName: "",
    email: "",
    firstPhoneNumber: "",
    secondPhoneNumber: "",
  };

  const validationSchema = Yup.object({
    pickUpLocation: Yup.string().required("PickUp Location is Required"),
    pickUpDate: Yup.date().required("PickUp Date is Required"),
    deliveryLocation: Yup.string().required("Delivery Location is Required"),
    deliveryDate: Yup.date().required("Delivery Date is Required"),
    weight: Yup.number()
      .required("Weight is Required")
      .positive("Weight must be greater than 0"),
    loadCategory: Yup.string().required("Load Category is Required"),
    companyName: Yup.string().required("Company Name is Required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    firstPhoneNumber: Yup.string()
      .matches(phoneNumberRegex, "Invalid phone number")
      .required("Phone number is required"),
    secondPhoneNumber: Yup.string()
      .matches(phoneNumberRegex, "Invalid phone number")
      .required("Phone number is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      <Form>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SelectInputForm
            name="pickUpLocation"
            as="select"
            placeholder="PickUp Location"
            options={options}
            label="PickUp Location"
          />
          <FormInput
            name="pickUpDate"
            type="date"
            placeholder="PickUp Date"
            label="PickUp Date"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <SelectInputForm
            name="deliveryLocation"
            as="select"
            placeholder="Delivery Location"
            options={options}
            label="Delivery Location"
          />
          <FormInput
            name="deliveryDate"
            type="date"
            placeholder="Delivery Date"
            label="Delivery Date"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <FormInput
            name="weight"
            type="number"
            placeholder="Weight (Tons)"
            label="Weight (Tons)"
          />
          <FormInput
            name="loadCategory"
            type="text"
            placeholder="Load Category"
            label="Load Category"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <FormInput
            name="email"
            type="email"
            placeholder="Email"
            label="Email"
          />
          <FormInput
            name="companyName"
            type="text"
            placeholder="Company Name"
            label="Company Name"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <FormInput
            name="firstPhoneNumber"
            type="text"
            placeholder="Contact Number"
            label="First Number"
          />
          <FormInput
            name="secondPhoneNumber"
            type="text"
            placeholder="Contact Number"
            label="Second Number"
          />
        </div>
        <button
          className="text-xl text-white font-semibold bg-mainColor w-full text-center py-4 capitalize rounded-lg mt-6"
          type="submit"
        >
          request your quote
        </button>
      </Form>
    </Formik>
  );
}
