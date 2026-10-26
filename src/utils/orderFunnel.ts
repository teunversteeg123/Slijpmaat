type FormType = 'consumer' | 'business';
type Selection = 'knife_quantity' | 'estimate_band' | 'service' | 'student_rate';
type Field = 'knives' | 'name' | 'postcode' | 'address' | 'company' | 'contact' | 'phone' | 'estimate';
type Track = (name: string, parameters: Record<string, string | number | boolean>) => void;

// Only controlled categories are accepted. Never send field values or draft messages.
export const createOrderFunnel = (formType: FormType, track: Track) => {
  let started = false;
  const start = () => {
    if (started) return;
    started = true;
    track('order_form_start', { form_type: formType });
  };
  return {
    start,
    select: (selection: Selection) => {
      start();
      track('order_selection', { form_type: formType, selection });
    },
    invalid: (field: Field) => {
      start();
      track('order_validation_error', { form_type: formType, field });
    },
    open: (method: 'whatsapp' | 'email') => {
      start();
      track('request_open', {
        form_type: formType,
        contact_method: method,
        request_status: 'draft_opened_not_sent',
      });
    },
  };
};
