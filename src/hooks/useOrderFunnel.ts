import { useRef } from 'react';
import { trackAnalyticsEvent } from '../utils/analytics';
import { createOrderFunnel } from '../utils/orderFunnel';

export const useOrderFunnel = (formType: 'consumer' | 'business') => {
  const funnel = useRef<ReturnType<typeof createOrderFunnel> | null>(null);
  if (!funnel.current) funnel.current = createOrderFunnel(formType, trackAnalyticsEvent);
  return funnel.current;
};
