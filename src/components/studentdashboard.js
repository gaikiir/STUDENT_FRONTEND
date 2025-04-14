import { Card, HR, Avatar } from "flowbite-react";

export default function Component() {
  return (
    <section className="wrapper bg-slate-700 h-screen">
      <div className="max-w-6xl  mx-auto">
        <h5 className="text-white font-bold uppercase py-2">Dashboard</h5>
        <article className="text-left p-2">
          <Avatar className="inline-block" rounded />
        </article>
        <h4 className="text-white text-left uppercase">Report</h4>
        <HR className="hr" />
        hello world
      </div>
    </section>
  );
}
