"use client";

import { Suspense } from "react";
import Step3Page from "@/components/Step3Page";

export default function Step3() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Step3Page />
    </Suspense>
  );
}
