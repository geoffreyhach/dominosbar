import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default function dateFormatter(date: string): string {
  return (
    format(new Date(date), "EEEE", {
      locale: fr,
    })
      .charAt(0)
      .toUpperCase() +
    format(new Date(date), "EEEE dd MMMM yyyy à HH:mm", {
      locale: fr,
    }).slice(1)
  );
}
