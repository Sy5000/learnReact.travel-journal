export default function (props) {
  return (
    <section>
      {props.setup && <strong> {props.setup}</strong>}
      <p>{props.punchLine}</p>
      <hr></hr>
    </section>
  );
}
