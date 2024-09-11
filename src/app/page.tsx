import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Find Event around your</h1>
      <p>Browser more than 10,000 events around you</p>
      <form>
        <input placeholder="Search events in any city" spellCheck={false} />
      </form>
      <section>
        <p>Popular:</p>
        <div>
          <Link href={`/events/austin`}>Austin</Link>
          <Link href={`/events/seattle`}>Seattle</Link>
        </div>
      </section>
    </main>
  );
}
