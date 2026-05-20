import { Input } from "./Input";
import { SearchableSelect } from "./SearchableSelect";

export const CompanyField = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
  submitCount,
}) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <Input
        label="Company name"
        placeholder="Enter company name"
        name="companyName"
        value={values.companyName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={(touched.companyName || submitCount > 0) && errors.companyName}
      />

      <SearchableSelect
        label="Company domain"
        placeholder="Please Select your Company Domain"
        options={[
          "Sole proprietorship",
          "Gbr",
          "Gmbh",
          "gGmbh",
          "OHG",
          "AG",
          "KG",
          "UG",
          "Gmbh & co. kg",
          "Kg Aa",
          "Collective Company",
          "Co-operative",
          "Association",
          "Foundation",
          "Corp.",
          "Inc.",
          "LP",
          "LLP",
          "LLLP",
          "LLC",
          "Ltd.Co",
          "PLLC",
          "PC",
        ]}
        name="companyDomain"
        value={values.companyDomain}
        onChange={(value) => setFieldValue("companyDomain", value)}
        onBlur={handleBlur}
        error={
          (touched.companyDomain || submitCount > 0) &&
          errors.companyDomain
        }
      />
    </div>
  );
};