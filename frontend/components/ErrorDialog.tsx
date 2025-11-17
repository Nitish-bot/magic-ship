import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { getErrorMessage } from "@/lib/errors";

type Props = Readonly<{
  error: unknown;
  onClose?(): false | void;
  title?: string;
}>;

export function ErrorDialog({ error, onClose, title }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <AlertDialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          if (!onClose || onClose() !== false) {
            setIsOpen(false);
          }
        }
      }}
    >
      <AlertDialogContent>
        <AlertDialogTitle color="red">{title ?? "We encountered the following error"}</AlertDialogTitle>
        <AlertDialogDescription>
          <span className='bg-gray-50 leading-relaxed text-gray-900'>{getErrorMessage(error, "Unknown")}</span>
        </AlertDialogDescription>
        <div className='flex justify-end mt-4'>
          <AlertDialogAction>
            Close
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}