import { ReactNode } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { buttonVariants } from "./ui/button";

export const CreateBookDialog = ({
	form,
	open,
	setDialogVisible,
}: {
	form: ReactNode;
	open: boolean;
	setDialogVisible: (visible: boolean) => void;
}) => {
	return (
		<Dialog open={open} onOpenChange={setDialogVisible}>
			<DialogTrigger className={buttonVariants()}>Create book</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create book</DialogTitle>
					<DialogDescription>
						This action will create new book in DB
					</DialogDescription>
				</DialogHeader>
				{form}
			</DialogContent>
		</Dialog>
	);
};
