import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface useSidebarToggleStore {
  // Store state to track if the sidebar is open
  isOpen: boolean;
  // Function to toggle the sidebar state
  setIsOpen: () => void;
}

export const useSidebarToggle = create(
  persist<useSidebarToggleStore>(
    (set, get) => ({
      // Initial state of the sidebar is open
      isOpen: true,
      // Toggles the sidebar's open state
      setIsOpen: () => {
        set({ isOpen: !get().isOpen });
      },
    }),
    {
      // Name of the persisted state in storage
      name: "sidebarOpen",
      // Storage method for persisting state
      storage: createJSONStorage(() => localStorage),
    }
  )
);
