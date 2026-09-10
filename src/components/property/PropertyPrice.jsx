'use client';

import { formatPriceEur } from '@/lib/constants';

/**
 * Цена в EUR; ако има стара цена – показва я задраскана преди актуалната.
 */
export default function PropertyPrice({
  price,
  oldPrice,
  category,
  locale = 'bg',
  className = '',
  oldClassName = 'line-through text-gray-400 mr-2',
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
      {oldText && <span className={oldClassName}>{oldText}</span>}
      <span className={currentClassName}>{eurText}</span>
    </Tag>
  );
}
