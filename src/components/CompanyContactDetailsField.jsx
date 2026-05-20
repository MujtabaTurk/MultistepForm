import { Input } from "./Input";
import { SearchableSelect } from "./SearchableSelect";

export const CompanyContactDetailsField = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
  submitCount,
}) => {
  return (
    <div className="space-y-4">
      <Input
        label="Email Address"
        placeholder="Enter your Email Address"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={(touched.email || submitCount > 0) && errors.email}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <SearchableSelect
          label="Reachability"
          placeholder="Please Select your Reachability"
          options={["Email", "Phone", "Mobile", "Post"]}
          name="reachability"
          value={values.reachability}
          onChange={(value) => setFieldValue("reachability", value)}
          onBlur={handleBlur}
          error={
            (touched.reachability || submitCount > 0) &&
            errors.reachability
          }
        />

        <SearchableSelect
          label="Sources"
          placeholder="Please Select your Sources"
          options={["Website", "Referral", "Social Media", "Other"]}
          name="source"
          value={values.source}
          onChange={(value) => setFieldValue("source", value)}
          onBlur={handleBlur}
          error={(touched.source || submitCount > 0) && errors.source}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Input
          label="Landline"
          placeholder="Enter your landline"
          name="landline"
          value={values.landline}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.landline || submitCount > 0) && errors.landline}
        />

        <Input
          label="Mobile Phone"
          placeholder="Enter your Mobile Phone"
          name="mobilePhone"
          value={values.mobilePhone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            (touched.mobilePhone || submitCount > 0) &&
            errors.mobilePhone
          }
        />

        <Input
          label="Website"
          placeholder="Enter your Website"
          name="website"
          value={values.website}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.website || submitCount > 0) && errors.website}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          label="Fax"
          placeholder="Enter your Fax"
          name="fax"
          value={values.fax}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.fax || submitCount > 0) && errors.fax}
        />

        <Input
          label="Birth Date"
          placeholder="mm/dd/yyyy"
          type="date"
          name="birthDate"
          value={values.birthDate}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.birthDate || submitCount > 0) && errors.birthDate}
        />
      </div>
    </div>
  );
};