import { Input } from "./Input";
import { SearchableSelect } from "./SearchableSelect";

export const ContactPersonField = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
  submitCount,
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <SearchableSelect
        label="Salutation"
        placeholder="Please Select your Salutation"
        options={[
          "Mister",
          "Women",
          "Family",
          "Spouses",
          "DR.",
          "PROF.",
          "PROF DR.",
        ]}
        name="contactPersonSalutation"
        value={values.contactPersonSalutation}
        onChange={(value) => setFieldValue("contactPersonSalutation", value)}
        onBlur={handleBlur}
        error={
          (touched.contactPersonSalutation || submitCount > 0) &&
          errors.contactPersonSalutation
        }
      />

      <SearchableSelect
        label="Further salutation"
        placeholder="Please Select your Further Salutation"
        options={["Not Found"]}
        name="contactPersonFurtherSalutation"
        value={values.contactPersonFurtherSalutation}
        onChange={(value) =>
          setFieldValue("contactPersonFurtherSalutation", value)
        }
        onBlur={handleBlur}
        error={
          (touched.contactPersonFurtherSalutation || submitCount > 0) &&
          errors.contactPersonFurtherSalutation
        }
      />

      <Input
        label="First name"
        placeholder="Enter first name"
        name="contactPersonFirstName"
        value={values.contactPersonFirstName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          (touched.contactPersonFirstName || submitCount > 0) &&
          errors.contactPersonFirstName
        }
      />

      <Input
        label="Last name"
        placeholder="Enter last name"
        name="contactPersonLastName"
        value={values.contactPersonLastName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          (touched.contactPersonLastName || submitCount > 0) &&
          errors.contactPersonLastName
        }
      />
    </div>
  );
};
