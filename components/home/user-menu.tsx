import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Button } from "@radix-ui/themes";
import { Session } from "next-auth";

export default function UserMenu({ session }: { session: Session | null }) {
  const { email, image } = session?.user || {};
  return (
    <>
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger>
          <Button variant="soft">email</Button>
        </DropdownMenuPrimitive.Trigger>
        <DropdownMenuPrimitive.Content>
          <DropdownMenuPrimitive.Item>
            Edit
            <div className="RightSlot">⌘ E</div>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item>
            Duplicate
            <div className="RightSlot">⌘ D</div>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Separator />
          <DropdownMenuPrimitive.Item>
            Archive
            <div className="RightSlot">⌘ N</div>
          </DropdownMenuPrimitive.Item>

          <DropdownMenuPrimitive.Sub>
            <DropdownMenuPrimitive.SubTrigger>
              More
            </DropdownMenuPrimitive.SubTrigger>
            <DropdownMenuPrimitive.SubContent>
              <DropdownMenuPrimitive.Item>
                Move to project…
              </DropdownMenuPrimitive.Item>
              <DropdownMenuPrimitive.Item>
                Move to folder…
              </DropdownMenuPrimitive.Item>

              <DropdownMenuPrimitive.Separator />
              <DropdownMenuPrimitive.Item>
                Advanced options…
              </DropdownMenuPrimitive.Item>
            </DropdownMenuPrimitive.SubContent>
          </DropdownMenuPrimitive.Sub>

          <DropdownMenuPrimitive.Separator />
          <DropdownMenuPrimitive.Item>Share</DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item>
            Add to favorites
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Separator />
          <DropdownMenuPrimitive.Item color="red">
            Delete
          </DropdownMenuPrimitive.Item>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Root>
    </>
  );
}
