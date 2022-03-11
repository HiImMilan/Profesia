export default function DashBoardCard(props) {
  return (
    <section className="flex mx-auto p-5 px-10 w-48 h-32 justify-center items-start flex-col bg-slate-700 text-neutral-400 rounded-lg shadow-2xl">
      <h3>{props.title}</h3>
      <h1 className="py-2 text-xl text-neutral-300"> {props.value}</h1>
    </section>
  );
}
