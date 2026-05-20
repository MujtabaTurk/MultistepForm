import { Input } from "./Input";

export const PersonContactDetailsField = ({
  values,
  handleBlur,
  touched,
  handleChange,
  errors,
}) => {
  return (
    <div className="space-y-5">
      <Input
        label="Email"
        placeholder="Enter Your Email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && errors.email}
      />
    </div>
  );
};
