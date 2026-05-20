import { Input } from "./Input";
import { SearchableSelect } from "./SearchableSelect";

export const AddressFields = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
  submitCount,
}) => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Input
          label="Street, house number"
          placeholder="Enter Your House Number"
          name="streetHouseNumber"
          value={values.streetHouseNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            (touched.streetHouseNumber || submitCount > 0) &&
            errors.streetHouseNumber
          }
        />

        <Input
          label="Postal Code"
          placeholder="Enter Your Postal Code"
          name="postalCode"
          value={values.postalCode}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.postalCode || submitCount > 0) && errors.postalCode}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Input
          label="Location"
          placeholder="Enter Your Location"
          name="location"
          value={values.location}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.location || submitCount > 0) && errors.location}
        />

        <SearchableSelect
          label="Country"
          placeholder="Please Select Country"
          options={[
            "Pakistan",
            "Germany",
            "United States",
            "United Kingdom",
            "Canada",
            "Australia",
            "UAE",
          ]}
          name="country"
          value={values.country}
          onChange={(value) => setFieldValue("country", value)}
          onBlur={handleBlur}
          error={(touched.country || submitCount > 0) && errors.country}
        />
      </div>
    </div>
  );
};
