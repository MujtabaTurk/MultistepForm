import { Input } from "./Input";

export const PaymentDetailsFields = ({
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
          label="IBAN"
          placeholder="Enter Your IBAN Number"
          name="iban"
          value={values.iban}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.iban || submitCount > 0) && errors.iban}
        />

        <Input
          label="BIC"
          placeholder="Enter Your BIC Number"
          name="bic"
          value={values.bic}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.bic || submitCount > 0) && errors.bic}
        />

        <Input
          label="Bank Name"
          placeholder="Enter Your Bank Name"
          name="bankName"
          value={values.bankName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.bankName || submitCount > 0) && errors.bankName}
        />

        <Input
          label="VAT ID"
          placeholder="Enter Your VAT ID"
          name="vatId"
          value={values.vatId}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.vatId || submitCount > 0) && errors.vatId}
        />
      </div>
    </div>
  );
};
