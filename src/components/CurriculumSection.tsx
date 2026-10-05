import { Waves, Monitor, AlertTriangle } from "lucide-react";
import { sessions, type SessionRow } from "../data/sessions";

function LocationBadge({ location }: { location: SessionRow["location"] }) {
  if (location === "eilat") {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded-full whitespace-nowrap">
        <Waves className="w-3 h-3" />
        אילת - פרונטלי
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider bg-secondary text-secondary-foreground border border-secondary-foreground/20 px-2 py-0.5 rounded-full whitespace-nowrap">
      <Monitor className="w-3 h-3" />
      זום
    </span>
  );
}

function DifferentDayBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider bg-destructive/15 text-destructive border border-destructive/30 px-2 py-0.5 rounded-full whitespace-nowrap">
      <AlertTriangle className="w-3 h-3" />
      יום שונה מהקבוע!
    </span>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center text-[10px] font-medium tracking-wider bg-muted text-muted-foreground px-2 py-0.5 rounded">
      {children}
    </span>
  );
}

function SessionRowDesktop({ s, index }: { s: SessionRow; index: number }) {
  const zebra = index % 2 === 1 ? "bg-muted/10" : "";
  const highlight = s.different
    ? "bg-destructive/[0.04] ring-1 ring-inset ring-destructive/20"
    : zebra;
  return (
    <tr className={`border-b border-border/30 last:border-b-0 transition-colors hover:bg-muted/20 ${highlight}`}>
      <td className="py-4 px-4 text-center">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/15 text-primary font-bold text-xs">
          {s.num}
        </span>
      </td>
      <td className="py-4 px-4 text-foreground/80 text-sm whitespace-nowrap">
        <div className={s.different ? "font-bold text-destructive" : ""}>{s.date}</div>
        <div className={`text-xs mt-0.5 ${s.different ? "font-bold text-destructive" : "text-muted-foreground"}`}>
          {s.daytime}
        </div>
        {s.different && (
          <div className="mt-1">
            <DifferentDayBadge />
          </div>
        )}
      </td>
      <td className="py-4 px-4">
        <LocationBadge location={s.location} />
      </td>
      <td className="py-4 px-4 text-foreground font-medium leading-relaxed">{s.topic}</td>
      <td className="py-4 px-4 text-muted-foreground leading-relaxed">
        <div>{s.detail}</div>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {s.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </td>
    </tr>
  );
}

function SessionCardMobile({ s }: { s: SessionRow }) {
  return (
    <div
      className={`p-4 border-b border-border/30 last:border-b-0 ${
        s.different ? "bg-destructive/[0.04] ring-1 ring-inset ring-destructive/20" : ""
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/15 text-primary font-bold text-xs">
          {s.num}
        </span>
        <LocationBadge location={s.location} />
      </div>
      <div className="text-sm text-foreground/80 mb-1">
        <span className={s.different ? "font-bold text-destructive" : ""}>{s.date}</span>
        {" · "}
        <span className={s.different ? "font-bold text-destructive" : "text-muted-foreground"}>{s.daytime}</span>
      </div>
      {s.different && (
        <div className="mb-2">
          <DifferentDayBadge />
        </div>
      )}
      <div className="font-medium text-foreground mb-1">{s.topic}</div>
      <div className="text-sm text-muted-foreground leading-relaxed">{s.detail}</div>
      <div className="flex flex-wrap gap-1.5 mt-2">
        {s.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  );
}

export default function CurriculumSection() {
  return (
    <section className="py-16 px-4" id="curriculum">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
            סילבוס - תוכנית 12 המפגשים
          </h2>
          <p className="text-muted-foreground">
            3 חודשים · 12 מפגשים · 16:00-20:00 · מסלול מובנה מהרעיון ועד הבמה
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
          <LocationBadge location="eilat" />
          <LocationBadge location="zoom" />
        </div>
        <div className="rounded-2xl border border-border/50 overflow-hidden">
          <div className="hidden md:block">
            <table className="w-full text-sm" dir="rtl">
              <thead>
                <tr className="border-b border-border/40 text-muted-foreground text-xs bg-muted/30">
                  <th className="py-3 px-4 text-right font-semibold w-12">#</th>
                  <th className="py-3 px-4 text-right font-semibold w-44">תאריך</th>
                  <th className="py-3 px-4 text-right font-semibold w-28">מיקום</th>
                  <th className="py-3 px-4 text-right font-semibold">נושא</th>
                  <th className="py-3 px-4 text-right font-semibold">פירוט</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((s, i) => (
                  <SessionRowDesktop key={s.num} s={s} index={i} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden">
            {sessions.map((s) => (
              <SessionCardMobile key={s.num} s={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
