export default function ReadingTime({ minutes }) {
  return minutes ? (
    <span>
      {' '}
      — About {minutes} {minutes === 1 ? 'minute' : 'minutes'}{' '}
      {'☕'.repeat(Math.ceil(minutes / 15))}
    </span>
  ) : (
    <></>
  );
}
