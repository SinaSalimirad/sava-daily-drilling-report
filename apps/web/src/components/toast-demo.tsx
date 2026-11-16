"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

export function ToastDemo() {
  return (
    <Button
      onClick={() =>
        toast.add({
          title: "Report saved",
          description: "The daily drilling report was saved.",
          type: "success",
        })
      }
    >
      Show toast
    </Button>
  );
}
