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
  name: z.string().trim().min(2, "Enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{10,15}$/, "Enter a valid phone number"),
  service: z.string().min(1, "Select a service"),
  message: z.string().trim().max(500).optional(),
});

type LeadValues = z.infer<typeof schema>;

interface LeadFormProps {
  variant?: "card" | "compact";
  title?: string;
  subtitle?: string;
}

const LeadForm = ({ variant = "card", title = "Get Free Site Inspection", subtitle = "Our expert will visit your site and share a no-obligation quote." }: LeadFormProps) => {
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
    defaultValues: { name: "", phone: "", service: "", message: "" },
  });

  const service = watch("service");

  const onSubmit = async (values: LeadValues) => {
    // Simulate submission
    await new Promise((r) => setTimeout(r, 700));
    toast({
      title: "Request received ✅",
      description: `Thanks ${values.name}! Our team will call you within 30 minutes.`,
    });
    reset();
  };

  return (
    <div
      className={
        variant === "card"
          ? "bg-card rounded-2xl shadow-elegant border border-border p-6 md:p-8"
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
      <h3 className="text-2xl font-extrabold text-primary mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-5">{subtitle}</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div>
          <Label htmlFor="name" className="text-sm font-semibold">Name</Label>
          <Input id="name" placeholder="Your name" {...register("name")} maxLength={80} />
          {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm font-semibold">Phone *</Label>
          <Input id="phone" inputMode="tel" placeholder="+91 98765 43210" {...register("phone")} maxLength={15} />
          {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <Label htmlFor="service" className="text-sm font-semibold">Service</Label>
          <Select value={service} onValueChange={(v) => setValue("service", v, { shouldValidate: true })}>
            <SelectTrigger id="service">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="epoxy">Epoxy Flooring</SelectItem>
              <SelectItem value="pu">PU (Polyurethane) Flooring</SelectItem>
              <SelectItem value="coating">Industrial Floor Coating</SelectItem>
              <SelectItem value="other">Other / Not sure</SelectItem>
            </SelectContent>
          </Select>
          {errors.service && <p className="text-xs text-destructive mt-1">{errors.service.message}</p>}
        </div>

        {variant === "card" && (
          <div>
            <Label htmlFor="message" className="text-sm font-semibold">Message (optional)</Label>
            <Textarea id="message" rows={3} placeholder="Approx. area, location, timeline…" {...register("message")} maxLength={500} />
          </div>
        )}

        <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting…" : "Request Free Callback"}
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
