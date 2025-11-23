'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import { createTopics } from "../../actions/create-topics"
import { useActionState } from "react"

export const TopicCreateForm = () => {

  const [formState, action] = useActionState(createTopics, { errors: {} })

  return (
    <Dialog>

      <DialogTrigger asChild>
        <Button>New Topic</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={action}>


          <DialogHeader>
            <DialogTitle>Create a topic</DialogTitle>
            <DialogDescription>
              Write a new topic to start discussion. Click save when you are done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" />
            </div>
            {formState.errors.name && <p className="text-sm text-red-600">{formState.errors.name}</p>}
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" />
            </div>
            {formState.errors.description && <p className="text-sm text-red-600">{formState.errors.description}</p>}
            {formState.errors.formError && <p className="border border-red-400 bg-red-600 p-2 rounded">{formState.errors.formError}</p>}
          </div>
          <DialogFooter className="">

            <Button type="submit" className="w-full">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>

    </Dialog>
  )
}
