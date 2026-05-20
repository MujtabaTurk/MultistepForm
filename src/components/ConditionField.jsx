import { Input } from "./Input";
import { SearchableSelect } from "./SearchableSelect";

export const ConditionFields = ({
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
        label="Payment term (days)"
        placeholder="Enter Your Payment (days)"
        name="paymentTermDays"
        value={values.paymentTermDays}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          (touched.paymentTermDays || submitCount > 0) && errors.paymentTermDays
        }
      />

      <Input
        label="Discount"
        placeholder="Enter Discount"
        name="discount"
        value={values.discount}
        onChange={handleChange}
        onBlur={handleBlur}
        error={(touched.discount || submitCount > 0) && errors.discount}
      />

      <Input
        label="Discount target (days)"
        placeholder="Enter Your target (days)"
        name="discountTargetDays"
        value={values.discountTargetDays}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          (touched.discountTargetDays || submitCount > 0) &&
          errors.discountTargetDays
        }
      />

      <SearchableSelect
        label="Sales price group"
        placeholder="Select price group"
        options={["Not Found"]}
        name="salesPriceGroup"
        value={values.salesPriceGroup}
        onChange={(value) => setFieldValue("salesPriceGroup", value)}
        onBlur={handleBlur}
        error={
          (touched.salesPriceGroup || submitCount > 0) && errors.salesPriceGroup
        }
      />
    </div>
  );
};
