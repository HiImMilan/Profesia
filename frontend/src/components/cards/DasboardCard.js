export default function DashBoardCard(props) {
  return (
    <section className="flex p-5 justify-center items-center flex-col bg-slate-700 text-neutral-400 rounded-lg shadow-2xl">
      <h3 className="text-2lg font-bold text-center">{props.title}</h3>
      <h1 className="py-2 text-3xl text-neutral-300"> {props.value}</h1>
    </section>
  );
}
