import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  company: z.string().trim().max(100).optional(),
  city: z.string().trim().max(60).optional(),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{10,15}$/, "Enter a valid phone number"),
  service: z.string().min(1, "Select a service"),
  area: z.string().trim().max(20).optional(),
  message: z.string().trim().max(500).optional(),
});

type LeadValues = z.infer<typeof schema>;

interface LeadFormProps {
  variant?: "card" | "compact";
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
}

const LeadForm = ({
  variant = "card",
  title = "Secure Your Slot for an Epoxy Flooring Consultation",
  subtitle = "Our expert will visit your site and share a no-obligation quote.",
  ctaLabel = "Book Free Site Assessment →",
}: LeadFormProps) => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", company: "", city: "", phone: "", service: "", area: "", message: "" },
  });

  const service = watch("service");

  const onSubmit = async (values: LeadValues) => {
    try {
      const res = await fetch("/mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source: title }),
      });
      const json = await res.json().catch(() => ({ success: res.ok }));
      if (!res.ok || !json.success) throw new Error(json.error || "Failed");
      toast({
        title: "Request received ✅",
        description: `Thanks ${values.name}! Our team will call you within 30 minutes.`,
      });
      reset();
    } catch (err: any) {
      toast({
        title: "Could not submit",
        description: err?.message || "Please call +91 97104 03526 directly.",
        variant: "destructive",
      });
    }
  };

  const isCompact = variant === "compact";

  return (
    <div
      className={
        variant === "card"
          ? "bg-card rounded-2xl shadow-elegant border border-border p-6 md:p-7"
          : "bg-card rounded-xl shadow-md border border-border p-6"
      }
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-full">
          FREE
        </span>
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          Limited Slots
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-extrabold text-primary mb-1 leading-snug">{title}</h3>
      <p className="text-sm text-muted-foreground mb-5">{subtitle}</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5" noValidate>
        <div>
          <Label htmlFor="name" className="text-sm font-semibold">Full Name</Label>
          <Input id="name" placeholder="Your full name" {...register("name")} maxLength={80} />
          {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
        </div>

        {!isCompact && (
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="company" className="text-sm font-semibold">Company</Label>
              <Input id="company" placeholder="Company name" {...register("company")} maxLength={100} />
            </div>
            <div>
              <Label htmlFor="city" className="text-sm font-semibold">City</Label>
              <Input id="city" placeholder="Chennai" {...register("city")} maxLength={60} />
            </div>
          </div>
        )}

        <div>
          <Label htmlFor="phone" className="text-sm font-semibold">Phone Number *</Label>
          <Input id="phone" inputMode="tel" placeholder="+91 98765 43210" {...register("phone")} maxLength={15} />
          {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <Label htmlFor="service" className="text-sm font-semibold">Service Required</Label>
          <Select value={service} onValueChange={(v) => setValue("service", v, { shouldValidate: true })}>
            <SelectTrigger id="service">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="epoxy">Epoxy Flooring</SelectItem>
              <SelectItem value="pu">PU Flooring</SelectItem>
              <SelectItem value="coating">Floor Coating</SelectItem>
              <SelectItem value="other">Others</SelectItem>
            </SelectContent>
          </Select>
          {errors.service && <p className="text-xs text-destructive mt-1">{errors.service.message}</p>}
        </div>

        {!isCompact && (
          <>
            <div>
              <Label htmlFor="area" className="text-sm font-semibold">Area Size (sq.ft)</Label>
              <Input id="area" inputMode="numeric" placeholder="e.g. 5000" {...register("area")} maxLength={20} />
            </div>
            <div>
              <Label htmlFor="message" className="text-sm font-semibold">Message (optional)</Label>
              <Textarea id="message" rows={2} placeholder="Location, timeline, requirements…" {...register("message")} maxLength={500} />
            </div>
          </>
        )}

        <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting…" : ctaLabel}
        </Button>

        <p className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
          <CheckCircle2 className="h-3.5 w-3.5 text-success" />
          We respond within 30 minutes • No spam
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
