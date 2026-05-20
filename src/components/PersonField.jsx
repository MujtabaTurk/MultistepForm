import React from "react";
import { Input } from "./Input";

export const PersonField = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  submitCount,
}) => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Input
          label="First Name"
          placeholder="Enter Your First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.firstName || submitCount > 0) && errors.firstName}
        />

        <Input
          label="Last Name"
          placeholder="Enter Your Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.lastName || submitCount > 0) && errors.lastName}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Input
          label="Customer Number"
          placeholder="Enter your contact"
          name="customerNumber"
          value={values.customerNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            (touched.customerNumber || submitCount > 0) && errors.customerNumber
          }
        />

        <Input
          label="Position"
          placeholder="Enter your Position"
          name="position"
          value={values.position}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.position || submitCount > 0) && errors.position}
        />
      </div>
    </div>
  );
};
