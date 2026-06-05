import { useEffect, useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const WHATSAPP = "2347075748942";

export const ROOM_PRICES: Record<string, string> = {
  "Silver Room": "₦19,350",
  "Gold Room": "₦27,950",
  "Diamond Room": "₦37,650",
  "White House Suite": "₦48,400",
  "Presidential Suite": "₦53,750",
};

export const ROOM_OPTIONS = Object.keys(ROOM_PRICES);

interface Props {
  defaultRoom?: string;
  trigger: React.ReactNode;
}

function nightsBetween(a: string, b: string) {
  if (!a || !b) return 0;
  const d1 = new Date(a).getTime();
  const d2 = new Date(b).getTime();
  if (isNaN(d1) || isNaN(d2) || d2 <= d1) return 0;
  return Math.round((d2 - d1) / 86400000);
}

export function BookingDialog({ defaultRoom, trigger }: Props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [room, setRoom] = useState(defaultRoom ?? ROOM_OPTIONS[0]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (defaultRoom) setRoom(defaultRoom);
  }, [defaultRoom]);

  const nights = useMemo(() => nightsBetween(checkIn, checkOut), [checkIn, checkOut]);
  const today = new Date().toISOString().split("T")[0];

  const canSubmit =
    name.trim().length > 1 &&
    phone.trim().length > 5 &&
    room &&
    checkIn &&
    checkOut &&
    nights > 0 &&
    Number(guests) > 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    const price = ROOM_PRICES[room] ?? "";
    const msg = `Hotel Booking Request%0A%0AName: ${name}%0APhone: ${phone}%0ARoom Type: ${room}%0APrice: ${price} / night%0ACheck-in: ${checkIn}%0ACheck-out: ${checkOut}%0ANights: ${nights}%0AGuests: ${guests}%0ASpecial Requests: ${notes || "None"}`;
    const url = `https://wa.me/${WHATSAPP}?text=${msg}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-gradient-gold">
            Reserve Your Stay
          </DialogTitle>
          <DialogDescription>
            Complete the form and we'll continue your booking on WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4 mt-2">
          <div className="grid gap-2">
            <Label htmlFor="bk-name">Guest Name</Label>
            <Input id="bk-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" required maxLength={80} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bk-phone">Phone Number</Label>
            <Input id="bk-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+234..." required maxLength={30} />
          </div>
          <div className="grid gap-2">
            <Label>Room Type</Label>
            <Select value={room} onValueChange={setRoom}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {ROOM_OPTIONS.map((r) => (
                  <SelectItem key={r} value={r}>{r} — {ROOM_PRICES[r]}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <Label htmlFor="bk-in">Check-in</Label>
              <Input id="bk-in" type="date" min={today} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bk-out">Check-out</Label>
              <Input id="bk-out" type="date" min={checkIn || today} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 items-end">
            <div className="grid gap-2">
              <Label htmlFor="bk-guests">Guests</Label>
              <Input id="bk-guests" type="number" min={1} max={10} value={guests} onChange={(e) => setGuests(e.target.value)} required />
            </div>
            <div className="text-sm text-muted-foreground pb-2">
              {nights > 0 ? `${nights} night${nights > 1 ? "s" : ""}` : "Select dates"}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bk-notes">Special Requests</Label>
            <Textarea id="bk-notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Anything we should know?" maxLength={500} rows={3} />
          </div>

          <DialogFooter>
            <button
              type="submit"
              disabled={!canSubmit}
              className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-gold hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed w-full"
            >
              <MessageCircle className="h-4 w-4" /> Continue on WhatsApp
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}