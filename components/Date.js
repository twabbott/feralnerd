const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function Date({ date, ...others }) {
  const d = date.split('-');
  const year = d[0];
  const month = months[Number(d[1] - 1)];
  const day = Number(d[2]);

  return <em {...others}>{`${month} ${day}, ${year}`}</em>;
}
