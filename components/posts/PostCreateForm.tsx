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

import { useActionState } from "react"
import { createPost } from "../../actions/create-post"

type CreatePostFormProps = {
  slug: string
}

export const PostCreateForm: React.FC<CreatePostFormProps> = ({ slug }) => {


  const [formState, action] = useActionState(createPost.bind(null, slug), { errors: {} })

  return (
    <Dialog>

      <DialogTrigger asChild>
        <Button>New Post</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={action}>


          <DialogHeader>
            <DialogTitle>Create a Post</DialogTitle>
            <DialogDescription>
              Write a new post. Click when you are done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" />
            </div>
            {formState.errors.title && <p className="text-sm text-red-600">{formState.errors.title}</p>}
            <div className="grid gap-3">
              <Label htmlFor="content">Content</Label>
              <Textarea id="content" name="content" />
            </div>
            {formState.errors.content && <p className="text-sm text-red-600">{formState.errors.content}</p>}
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
