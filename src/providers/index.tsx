import type { ReactNode } from "react";
import { QueryProvider } from "./query";
import { SuiProvider } from "./sui";
import { ThemeProvider } from "./theme";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryProvider>
      <SuiProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </SuiProvider>
    </QueryProvider>
  );
};