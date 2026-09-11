'use client';

import { formatPriceEur } from '@/lib/constants';

/**
 * Цена в EUR; ако има стара цена – показва я задраскана преди актуалната.
 * При стара цена: старата е по-тъмна (graphite), новата е в brand синьо (cadetblue).
 */
export default function PropertyPrice({
  price,
  oldPrice,
  category,
  locale = 'bg',
  className = '',
  oldClassName = 'line-through mr-2 font-normal',
  currentClassName = '',
  as: Tag = 'span',
}) {
  const { eurText } = formatPriceEur(price, category, locale);
  const hasOld =
    oldPrice != null &&
    oldPrice !== '' &&
    Number.isFinite(Number(oldPrice)) &&
    Number(oldPrice) > 0;
  const oldText = hasOld
    ? formatPriceEur(Number(oldPrice), category, locale).eurText
    : null;

  return (
    <Tag className={className}>
      {oldText && (
        <span className={`text-graphite ${oldClassName}`.trim()}>{oldText}</span>
      )}
      <span className={`${oldText ? 'text-cadetblue' : ''} ${currentClassName}`.trim()}>
        {eurText}
      </span>
    </Tag>
  );
}
