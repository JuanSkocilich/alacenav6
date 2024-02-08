import React from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";

const ScrollAreaDemo = ({ children, className, bg }) => (
  <ScrollArea.Root className="w-full rounded overflow-hidden">
    <ScrollArea.Viewport className={`w-full ${!className && "max-h-[285px]"} rounded ${className}`}>
      {children}
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar
      className={`flex select-none touch-none rounded-md ${
        bg && "bg-[#f1f5f9] dark:bg-[#1e293b77]"
      } p-[1.5px] transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
      orientation="vertical`}
    >
      <ScrollArea.Thumb className="flex-1 w-full bg-[#e4e4e7] dark:bg-[#27272a] rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
    </ScrollArea.Scrollbar>
    <ScrollArea.Scrollbar
      className="flex select-none touch-none p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
      orientation="horizontal"
    >
      <ScrollArea.Thumb className="flex-1 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
    </ScrollArea.Scrollbar>
    {/* <ScrollArea.Corner /> */}
  </ScrollArea.Root>
);

export default ScrollAreaDemo;
